import { useOutletContext } from 'react-router-dom';

import MainTrackList from 'components/MainTrackList';
import { Astronaut } from 'components/Loader';
import { useGetChartsWorldQuery } from 'redux/music/services/audio-api';
import { useError } from 'hooks';

const HomePage = () => {
  const { play } = useOutletContext();
  const { data, error, isError, isLoading } = useGetChartsWorldQuery();
  useError(error);

  return !isError && isLoading ? (
    <Astronaut size={350} style={{ margin: '0 auto' }} />
  ) : (
    data && <MainTrackList onPlay={play} dataList={data} />
  );
};

export default HomePage;
