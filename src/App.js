import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const AllArtistsPage = lazy(() => import('pages/AllArtistsPage'));
const ArtistPage = lazy(() => import('pages/ArtistPage'));
const AllTracksPage = lazy(() => import('pages/AllTracksPage'));
const TrackPage = lazy(() => import('pages/TrackPage'));
const GenresPage = lazy(() => import('pages/GenresPage'));
const Favorites = lazy(() => import('pages/Favorites'));
const Charts = lazy(() => import('pages/Charts'));
const Recent = lazy(() => import('pages/Recent'));
const Search = lazy(() => import('pages/Search'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="artists" element={<AllArtistsPage />} />
        <Route path="artists/:artistName" element={<ArtistPage />} />
        <Route path="tracks" element={<AllTracksPage />} />
        <Route path="tracks/:trackId" element={<TrackPage />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="recent" element={<Recent />} />
        <Route path="search" element={<Search />} />
        <Route path="genres" element={<GenresPage />} />
        <Route path="charts" element={<Charts />} />
        <Route path="*" element={<p>Not found</p>} />
      </Route>
    </Routes>
  );
}

export default App;
