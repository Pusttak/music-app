import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';

import { useGetChartByCountryQuery } from 'redux/music/services/audio-api';
import { currentCountrySelector } from 'redux/music/music-selectors';
import { Astronaut } from 'components/Loader';
import { useError } from 'hooks';
import MainTrackList from 'components/MainTrackList';

const Charts = () => {
  const { value } = useSelector(currentCountrySelector);
  const { play } = useOutletContext();
  const { data, isError, error, isLoading } = useGetChartByCountryQuery(value, {
    skip: !value,
  });
  useError(error);

  return !isError && isLoading ? (
    <Astronaut size={350} style={{ margin: '0 auto' }} />
  ) : (
    data && <MainTrackList dataList={data} onPlay={play} />
  );
};

export default Charts;
