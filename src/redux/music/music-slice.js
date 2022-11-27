import { createSlice } from '@reduxjs/toolkit';

export const musicSlice = createSlice({
  name: 'music',
  initialState: {
    currentTrack: '',
    searchQuery: '',
    currentGenre: {},
    currentCountry: {},
    likesList: [],
    recentList: [],
    playlist: [],
    isError: null,
  },
  reducers: {
    currentTrack: (state, { payload }) => ({ ...state, currentTrack: payload }),
    searchQuery: (state, { payload }) => ({ ...state, searchQuery: payload }),
    currentGenre: (state, { payload }) => ({ ...state, currentGenre: payload }),
    currentCountry: (state, { payload }) => ({
      ...state,
      currentCountry: payload,
    }),
    addToLikesList: (state, { payload }) => ({
      ...state,
      likesList: [payload, ...state.likesList],
    }),
    removeFromLikesList: (state, { payload }) => ({
      ...state,
      likesList: state.likesList.filter(track => track.key !== payload),
    }),
    addToRecentList: (state, { payload }) => ({
      ...state,
      recentList: [payload, ...state.recentList],
    }),
    removeFromRecentList: (state, { payload }) => ({
      ...state,
      recentList: state.recentList.filter(track => track.key !== payload),
    }),
    addPlaylist: (state, { payload }) => ({ ...state, playlist: payload }),
    isError: (state, { payload }) => ({ ...state, isError: payload }),
  },
});

export const {
  currentTrack,
  searchQuery,
  currentGenre,
  currentCountry,
  addToLikesList,
  removeFromLikesList,
  addToRecentList,
  removeFromRecentList,
  addPlaylist,
  isError,
} = musicSlice.actions;
