export const isPlayingSelector = state => state.audioPlayer.playing;
export const volumeSelector = state => state.audioPlayer.volume;
export const currentTimeSelector = state => state.audioPlayer.currentTime;
export const audioDurationSelector = state => state.audioPlayer.duration;
export const isLoopingSelector = state => state.audioPlayer.audioLoop;
export const isMutedSelector = state => state.audioPlayer.audioMuted;
export const isShuffleSelector = state => state.audioPlayer.shuffle;
export const isOpenPlayerBarSelector = state => state.audioPlayer.playerIsOpen;
export const isEndedSelector = state => state.audioPlayer.trackIsEnded;
