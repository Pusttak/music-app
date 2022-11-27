import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { playing, currentTime, duration, volume, audioMuted, audioLoop, trackIsEnded } from 'redux/player/player-slice';
import { isPlayingSelector, isLoopingSelector, isMutedSelector } from 'redux/player/player-selectors';

export const useAudio = url => {
  const [audio, setAudio] = useState(null);
  const isPlaying = useSelector(isPlayingSelector);
  const isAudioLooping = useSelector(isLoopingSelector);
  const isAudioMuted = useSelector(isMutedSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const newAudio = new Audio();
    newAudio.preload = 'metadata';
    setAudio(newAudio);
  }, []);

  useEffect(() => {
    if (audio && url) {
      audio.load();
      audio.src = url;

      if (audio.readyState > 0) {
        dispatch(duration(audio.duration));
      } else {
        audio.onloadedmetadata = () => {
          dispatch(duration(audio.duration));
        };
      }
      audio.play();
      dispatch(playing(true));
    }
  }, [audio, dispatch, url]);

  useEffect(() => {
    if (audio) {
      audio.ontimeupdate = () => {
        dispatch(currentTime(audio.currentTime));
      };
      audio.onended = () => {
        audio.pause();
        dispatch(playing(false));
        dispatch(trackIsEnded(true));
      };
    }
  }, [audio, dispatch]);

  const play = () => {
    !isPlaying ? audio.play() : audio.pause();
    dispatch(playing(!isPlaying));
  };

  const volumeChange = value => {
    if (isAudioMuted) {
      audio.muted = false;
      dispatch(audioMuted(false));
    }
    audio.volume = value / 100;
    dispatch(volume(Number(value)));

    if (audio.volume === 0) {
      audio.muted = true;
      dispatch(audioMuted(true));
    }
  };

  const isMuted = () => {
    if (!isAudioMuted) {
      dispatch(volume(0));
    } else {
      if (audio.volume === 0) {
        audio.volume = 65 / 100;
        dispatch(volume(audio.volume * 100));
      } else {
        dispatch(volume(audio.volume * 100));
      }
    }
    audio.muted = !isAudioMuted;
    dispatch(audioMuted(!isAudioMuted));
  };

  const isLoop = () => {
    audio.loop = !isAudioLooping;
    dispatch(audioLoop(!isAudioLooping));
  };

  const currentTimeChange = value => {
    audio.currentTime = value;
    dispatch(currentTime(audio.currentTime));
  };

  return {
    play,
    volumeChange,
    isLoop,
    isMuted,
    currentTimeChange,
  };
};
