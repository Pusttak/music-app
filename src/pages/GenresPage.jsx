import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';

import ShortTracksList from 'components/ShortTracksList';
import MainTrackList from 'components/MainTrackList';
import { currentGenreSelector } from 'redux/music/music-selectors';
import { Astronaut } from 'components/Loader';
import { genres } from 'utils';
import { useGetChartByGenreQuery } from 'redux/music/services/audio-api';
import { useError } from 'hooks';

const GenresPage = () => {
  const { value } = useSelector(currentGenreSelector);
  const { play } = useOutletContext();
  const { data, isLoading, isError, error } = useGetChartByGenreQuery(value, {
    skip: !value,
  });
  useError(error);

  return !isError && isLoading ? (
    <Astronaut size={350} style={{ margin: '0 auto' }} />
  ) : value ? (
    data && <MainTrackList dataList={data} onPlay={play} />
  ) : (
    <ul>
      {genres.slice(1, 4).map((option, idx) => (
        <li key={idx}>
          <ShortTracksList onPlay={play} option={option} />
        </li>
      ))}
    </ul>
  );
};

export default GenresPage;
