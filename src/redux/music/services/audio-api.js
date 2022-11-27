import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from 'redux/axiosBaseQuery';

export const audioApi = createApi({
  reducerPath: 'audio',
  tagTypes: ['Audio'],
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: builder => ({
    searchMusic: builder.query({
      query: query => ({
        url: `/search/multi?search_type=SONGS&query=${query}`,
        method: 'GET',
      }),
      providesTags: ['Audio'],
    }),
    getChartsWorld: builder.query({
      query: () => ({
        url: `/charts/world`,
        method: 'GET',
      }),
      providesTags: ['Audio'],
    }),
    getArtistById: builder.query({
      query: id => ({
        url: `/artists/details?artist_id=${id}`,
        method: 'GET',
      }),
      providesTags: ['Audio'],
    }),
    getTrackById: builder.query({
      query: id => ({
        url: `/tracks/details?track_id=${id}`,
        method: 'GET',
      }),
      providesTags: ['Audio'],
    }),
    getAllTracks: builder.query({
      query: () => ({
        url: `/search/multi?search_type=SONGS&query=a o`,
        method: 'GET',
      }),
      providesTags: ['Audio'],
    }),
    getAllArtists: builder.query({
      query: () => ({
        url: `/search/multi?search_type=ARTISTS&query=a o`,
        method: 'GET',
      }),
      providesTags: ['Audio'],
    }),
    getChartByGenre: builder.query({
      query: genre => ({
        url: `/charts/genre-world?genre_code=${genre}`,
        method: 'GET',
      }),
      providesTags: ['Audio'],
    }),
    getChartByCountry: builder.query({
      query: country => ({
        url: `/charts/country?country_code=${country}`,
        method: 'GET',
      }),
      providesTags: ['Audio'],
    }),
  }),
});

export const {
  useSearchMusicQuery,
  useGetChartsWorldQuery,
  useGetArtistByIdQuery,
  useGetTrackByIdQuery,
  useGetAllTracksQuery,
  useGetAllArtistsQuery,
  useGetChartByGenreQuery,
  useGetChartByCountryQuery,
} = audioApi;
