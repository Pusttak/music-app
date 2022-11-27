import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { shuffle, trackIsEnded } from 'redux/player/player-slice';
import {
  isPlayingSelector,
  isLoopingSelector,
  isShuffleSelector,
  isEndedSelector,
} from 'redux/player/player-selectors';
import { recentListSelector } from 'redux/music/music-selectors';
import { addToRecentList } from 'redux/music/music-slice';
import MainTimeline from 'components/MainTimeline';
import { usePlaylist } from 'hooks';
import { PlayIcon2, PauseIcon, SkipForwardIcon, SkipBackIcon, ShuffleIcon, RepeatIcon2 } from 'icons';
import s from './Player.module.scss';

const Player = ({ onPlay, onLoop, onCurrentTime, data }) => {
  const isPlaying = useSelector(isPlayingSelector);
  const isLoop = useSelector(isLoopingSelector);
  const isShuffle = useSelector(isShuffleSelector);
  const isEnded = useSelector(isEndedSelector);
  const currentRecentList = useSelector(recentListSelector);
  const dispatch = useDispatch();
  const { playNext, playPrevious } = usePlaylist();

  useEffect(() => {
    if (isEnded) {
      dispatch(trackIsEnded(false));
      playNext();
      const inList = currentRecentList.find(track => track.key === data.key);
      if (!inList) {
        const { key, title, subtitle, images, artists } = data;

        dispatch(addToRecentList({ key, title, subtitle, images, artists }));
      }
    }
  }, [currentRecentList, data, dispatch, isEnded, playNext]);

  return (
    <>
      <div className={s.controls}>
        <ShuffleIcon
          size={14}
          className={isShuffle ? s.isActive : null}
          onClick={() => {
            dispatch(shuffle(!isShuffle));
          }}
        />
        <SkipBackIcon size={25} className={s.skipIcon} onClick={() => playPrevious()} />
        <div className={s.playButtonWrapper} onClick={() => onPlay()}>
          {isPlaying ? <PauseIcon size={14} /> : <PlayIcon2 size={14} />}
        </div>
        <SkipForwardIcon size={25} className={s.skipIcon} onClick={() => playNext()} />
        <RepeatIcon2
          size={14}
          className={isLoop ? s.isActive : null}
          onClick={() => {
            onLoop(!isLoop);
          }}
        />
      </div>
      <MainTimeline onCurrentTime={onCurrentTime} />
    </>
  );
};

export default Player;
