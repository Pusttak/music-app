import { useParams, useOutletContext } from 'react-router-dom';

import { useSearchMusicQuery } from 'redux/music/services/audio-api';
import { Astronaut } from 'components/Loader';
import { useError } from 'hooks';
import TracksList from 'components/TracksList';

const ArtistPage = () => {
  const { artistName } = useParams();
  const { play } = useOutletContext();
  const { data, isError, error, isLoading } = useSearchMusicQuery(artistName, {
    skip: !artistName,
  });
  useError(error);

  return !isError && isLoading ? (
    <Astronaut size={350} style={{ margin: '0 auto' }} />
  ) : (
    data && <TracksList onPlay={play} dataList={data.tracks.hits} />
  );
};

export default ArtistPage;
