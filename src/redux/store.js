import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';

import { audioApi } from 'redux/music/services/audio-api';
import { userSlice } from 'redux/user/user-slice';
import { musicSlice } from 'redux/music/music-slice';
import { audioPlayerSlice } from 'redux/player/player-slice';

const musicPersistConfig = {
  key: 'music',
  storage,
  whitelist: ['likesList', 'recentList'],
};

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['countryCode'],
};

export const store = configureStore({
  reducer: {
    [audioApi.reducerPath]: audioApi.reducer,
    user: persistReducer(userPersistConfig, userSlice.reducer),
    music: persistReducer(musicPersistConfig, musicSlice.reducer),
    audioPlayer: audioPlayerSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    audioApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
