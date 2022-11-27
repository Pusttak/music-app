import { useOutletContext } from 'react-router-dom';

import { useGetAllTracksQuery } from 'redux/music/services/audio-api';
import { useError } from 'hooks';
import TracksList from 'components/TracksList';

import { Astronaut } from 'components/Loader';

const TracksPage = () => {
  const { play } = useOutletContext();
  const { data, isError, error, isLoading } = useGetAllTracksQuery();
  useError(error);

  return !isError && isLoading ? (
    <Astronaut size={350} style={{ margin: '0 auto' }} />
  ) : (
    data && <TracksList onPlay={play} dataList={data.tracks.hits} />
  );
};

export default TracksPage;
