import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
