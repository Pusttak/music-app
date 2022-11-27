import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';

import { recentListSelector } from 'redux/music/music-selectors';
import MainTrackList from 'components/MainTrackList';
import EmptyPage from 'components/EmptyPage';

const Recent = () => {
  const recentList = useSelector(recentListSelector);
  const { play } = useOutletContext();

  return recentList.length > 0 ? <MainTrackList onPlay={play} dataList={recentList.slice(0, 50)} /> : <EmptyPage />;
};

export default Recent;
