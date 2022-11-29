import { useCallback, useEffect, useRef } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { currentTrack, addToLikesList, removeFromLikesList } from 'redux/music/music-slice';
import { useGetTrackByIdQuery } from 'redux/music/services/audio-api';
import { likesListSelector, currentTrackSelector } from 'redux/music/music-selectors';
import { isPlayingSelector } from 'redux/player/player-selectors';
import Playlist from 'components/Playlist';
import { PlayIcon2, PauseIcon, HeartIcon } from 'icons';
import { useError } from 'hooks';
import { Astronaut } from 'components/Loader';
import s from './TrackPage.module.scss';

const TrackPage = () => {
  const { trackId } = useParams();
  const { play } = useOutletContext();
  const likeList = useSelector(likesListSelector);
  const stateCurrentTrack = useSelector(currentTrackSelector);
  const isPlaying = useSelector(isPlayingSelector);
  const dispatch = useDispatch();
  const ref = useRef();
  const { data, error, isError, isLoading } = useGetTrackByIdQuery(trackId, {
    skip: !trackId,
  });
  useError(error);

  useEffect(() => {
    if (data) {
      ref.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }, [data, trackId]);

  const trackIsLIkes = useCallback(
    id => {
      return likeList.some(track => track?.key === id);
    },
    [likeList]
  );

  const hadleClickLikesList = track => {
    trackIsLIkes(track?.key) ? dispatch(removeFromLikesList(track?.key)) : dispatch(addToLikesList(track));
  };

  const handleButtonPlayClick = trackId => {
    if (trackId !== stateCurrentTrack) {
      dispatch(currentTrack(trackId));
      return;
    }
    if (trackId === stateCurrentTrack) {
      play();
      return;
    }
  };

  return !isError && isLoading ? (
    <Astronaut size={350} style={{ margin: '0 auto' }} />
  ) : (
    data && (
      <>
        <div
          ref={ref}
          className={s.header}
          style={{
            backgroundImage: `url(${data.images.coverart})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div
            className={s.headerBg}
            style={{
              backgroundImage: `url(${data.images.coverart})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top 30%',
              backgroundSize: '220px',
            }}
          >
            <div className={s.title}>
              <span className={s.track}>{data?.title}</span>
              <span className={s.artist}>{data?.subtitle}</span>
            </div>
            <div className={s.buttonsBar}>
              <div className={s.button} onClick={() => handleButtonPlayClick(trackId)}>
                {isPlaying && trackId === stateCurrentTrack ? <PauseIcon size="22" strokeWidth="6" /> : <PlayIcon2 />}
                Play
              </div>
              <div
                className={trackIsLIkes(trackId) ? [s.button, s.buttonActive].join(' ') : s.button}
                onClick={() =>
                  hadleClickLikesList({
                    key: data?.key,
                    title: data?.title,
                    subtitle: data?.subtitle,
                    images: data?.images,
                    artists: data?.artist,
                  })
                }
              >
                {trackIsLIkes(trackId) ? <HeartIcon color="white" /> : <HeartIcon />}
                Like
              </div>
            </div>
            <div className={s.artistImg}>
              <div className={s.imgWrapper}>
                <img src={data?.images?.background} alt={data?.subtitle} />
              </div>
            </div>
          </div>
        </div>
        <div className={s.trackList}></div>
        <Playlist
          artist={data?.subtitle}
          onLikesList={hadleClickLikesList}
          onTrackIsLIkes={trackIsLIkes}
          onPlay={handleButtonPlayClick}
        />
      </>
    )
  );
};

export default TrackPage;
