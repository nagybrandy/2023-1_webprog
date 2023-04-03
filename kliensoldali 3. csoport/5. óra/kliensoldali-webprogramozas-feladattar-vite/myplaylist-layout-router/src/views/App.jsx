import { Playlists } from "./playlists/Playlists";
import { Home } from "./home/Home";
import { Tracks } from "./tracks/Tracks";
import { Search } from "./search/Search";
import Layout from "./layout/Layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="playlists" element={<Playlists />} />
            <Route path="tracks" element={<Tracks />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}
