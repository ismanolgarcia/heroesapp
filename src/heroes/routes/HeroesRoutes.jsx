import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from '../../ui';
import { DcPage, MarvelPage, SearchPage, HeroPage, NotFoundPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/dc" element={<DcPage />} />
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="hero/:id" element={<HeroPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/" element={<Navigate to="marvel"   />} />
      </Routes>
    </>
  );
};
