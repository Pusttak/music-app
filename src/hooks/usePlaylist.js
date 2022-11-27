import { useSelector, useDispatch } from 'react-redux';

import { currentTrack } from 'redux/music/music-slice';
import { playlistSelector, currentTrackSelector } from 'redux/music/music-selectors';
import { isShuffleSelector } from 'redux/player/player-selectors';

export const usePlaylist = () => {
  const currentTrackId = useSelector(currentTrackSelector);
  const currentPlaylist = useSelector(playlistSelector);
  const isShuffle = useSelector(isShuffleSelector);
  const dispatch = useDispatch();

  const idx = currentPlaylist.findIndex(trackid => trackid === currentTrackId);

  const randomizer = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const randomSkip = randomizer(1, 5);

  const playNext = () => {
    if (currentPlaylist?.length === 0) {
      return;
    }
    if (isShuffle) {
      if (idx + randomSkip >= currentPlaylist.length - 1) {
        const newIdx = ((idx + randomSkip) % (currentPlaylist.length - 1)) + 1;
        dispatch(currentTrack(currentPlaylist[newIdx]));
        return;
      }
      dispatch(currentTrack(currentPlaylist[idx + randomSkip]));
    } else {
      if (idx === currentPlaylist.length - 1) {
        dispatch(currentTrack(currentPlaylist[0]));
        return;
      }
      dispatch(currentTrack(currentPlaylist[idx + 1]));
    }
  };

  const playPrevious = () => {
    if (currentPlaylist?.length === 0) {
      return;
    }
    if (isShuffle) {
      if (idx - randomSkip <= 0) {
        const newIdx = currentPlaylist.length - 1 - (randomSkip % idx) - 1;
        dispatch(currentTrack(currentPlaylist[newIdx]));
        return;
      }
      dispatch(currentTrack(currentPlaylist[idx - randomSkip]));
    } else {
      if (idx === 0) {
        dispatch(currentTrack(currentPlaylist[currentPlaylist.length - 1]));
        return;
      }
      dispatch(currentTrack(currentPlaylist[idx - 1]));
    }
  };

  return { playNext, playPrevious };
};
