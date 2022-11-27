import { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';

import { currentGenre, currentCountry } from 'redux/music/music-slice';
import { useGetTrackByIdQuery } from 'redux/music/services/audio-api';
import { currentTrackSelector, currentGenreSelector, currentCountrySelector } from 'redux/music/music-selectors';
import { isOpenPlayerBarSelector } from 'redux/player/player-selectors';
import { userCountryCodeSelector } from 'redux/user/user-selectors';
import PlayerBar from 'components/PlayerBar';
import ExtraSideBar from 'components/ExtraSideBar';
import TrackSideBar from 'components/TrackSideBar';
import ExtraSideBarMenu from 'components/ExtraSideBarMenu';
import ChartByCountryList from 'components/ChartByCountryList';
import ExtraMenu from 'components/ExtraMenu';
import { useAudio } from 'hooks/useAudio';
import { genres, countries } from 'utils';
import s from './MainLayout.module.scss';
import { isErrorSelector } from 'redux/music/music-selectors';
import Error from 'components/Error';
import { Astronaut } from 'components/Loader';

const MainLayout = () => {
  const isOpen = useSelector(isOpenPlayerBarSelector);
  const currentTrackId = useSelector(currentTrackSelector);
  const genreState = useSelector(currentGenreSelector);
  const countryState = useSelector(currentCountrySelector);
  const location = useLocation();
  const { data } = useGetTrackByIdQuery(currentTrackId, {
    skip: !currentTrackId,
  });
  const { ...controlls } = useAudio(data?.hub?.actions?.[1]?.uri);
  const userCountryCode = useSelector(userCountryCodeSelector);
  const dispatch = useDispatch();
  const isErrorState = useSelector(isErrorSelector);

  useEffect(() => {
    const code = countries.find(country => country.title === userCountryCode);
    if (code) {
      dispatch(currentCountry(code));
    }
  }, [dispatch, userCountryCode]);

  return (
    <div className={s.mainWrapper}>
      <div className={isOpen && currentTrackId ? [s.mainContent, s.playerIsOpen].join(' ') : s.mainContent}>
        <Suspense fallback={<Astronaut size={350} style={{ margin: '0 auto' }} />}>
          {isErrorState ? <Error error={isErrorState} /> : <Outlet context={{ ...controlls }} />}
        </Suspense>
      </div>
      <ExtraSideBar>
        {location.pathname === '/genres' && (
          <ExtraMenu list={genres} action={currentGenre} stateOption={genreState.title} />
        )}
        {location.pathname === '/charts' && (
          <ExtraMenu list={countries} action={currentCountry} stateOption={countryState.title} />
        )}
        {(location.pathname === '/genres' || location.pathname === '/charts') && (
          <ChartByCountryList onPlay={controlls.play} />
        )}
        {location.pathname !== '/genres' && location.pathname !== '/charts' && (
          <ExtraSideBarMenu>
            {currentTrackId && <TrackSideBar />}
            <ChartByCountryList title={'Trending in your country'} onPlay={controlls.play} />
          </ExtraSideBarMenu>
        )}
      </ExtraSideBar>
      <PlayerBar {...controlls} />
    </div>
  );
};

export default MainLayout;
