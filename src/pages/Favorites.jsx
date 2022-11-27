import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';

import { likesListSelector } from 'redux/music/music-selectors';
import EmptyPage from 'components/EmptyPage';
import MainTrackList from 'components/MainTrackList';

const Favorites = () => {
  const likesList = useSelector(likesListSelector);
  const { play } = useOutletContext();

  return likesList.length > 0 ? (
    <MainTrackList onPlay={play} dataList={likesList} />
  ) : (
    <EmptyPage text={'Add your favorite songs'} />
  );
};

export default Favorites;
