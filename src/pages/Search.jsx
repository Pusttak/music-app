import { useOutletContext } from 'react-router-dom';

import TracksList from 'components/TracksList';
import { useSearchMusicQuery } from 'redux/music/services/audio-api';
import { searchQuerySelector } from 'redux/music/music-selectors';
import { Astronaut } from 'components/Loader';
import { useError } from 'hooks';

import { useSelector } from 'react-redux';

const Search = () => {
  const { play } = useOutletContext();
  const query = useSelector(searchQuerySelector);
  const { data, error, isError, isFetching } = useSearchMusicQuery(query, {
    skip: !query,
  });
  useError(error);

  return !isError && isFetching ? (
    <Astronaut size={350} style={{ margin: '0 auto' }} />
  ) : (
    data && <TracksList onPlay={play} dataList={data.tracks.hits} />
  );
};

export default Search;
