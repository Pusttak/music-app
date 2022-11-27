import { createSlice } from '@reduxjs/toolkit';

export const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  initialState: {
    playing: false,
    currentTime: 0,
    duration: 0,
    volume: 100,
    audioMuted: false,
    audioLoop: false,
    shuffle: false,
    playerIsOpen: true,
    trackIsEnded: false,
  },
  reducers: {
    playing: (state, { payload }) => ({ ...state, playing: payload }),
    currentTime: (state, { payload }) => ({ ...state, currentTime: payload }),
    duration: (state, { payload }) => ({ ...state, duration: payload }),
    volume: (state, { payload }) => ({ ...state, volume: payload }),
    audioMuted: (state, { payload }) => ({ ...state, audioMuted: payload }),
    audioLoop: (state, { payload }) => ({ ...state, audioLoop: payload }),
    shuffle: (state, { payload }) => ({ ...state, shuffle: payload }),
    playerIsOpen: (state, { payload }) => ({ ...state, playerIsOpen: payload }),
    trackIsEnded: (state, { payload }) => ({ ...state, trackIsEnded: payload }),
  },
});

export const { playing, currentTime, duration, volume, audioMuted, audioLoop, shuffle, playerIsOpen, trackIsEnded } =
  audioPlayerSlice.actions;
