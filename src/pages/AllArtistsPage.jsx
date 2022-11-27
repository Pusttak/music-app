import { useGetAllArtistsQuery } from 'redux/music/services/audio-api';
import ArtistsList from 'components/ArtistsList';
import { useError } from 'hooks';
import { Astronaut } from 'components/Loader';

const AllArtistsPage = () => {
  const { data, isError, error, isLoading } = useGetAllArtistsQuery();
  useError(error);

  return !isError && isLoading ? (
    <Astronaut size={350} style={{ margin: '0 auto' }} />
  ) : (
    data && <ArtistsList dataList={data.artists.hits} />
  );
};

export default AllArtistsPage;
