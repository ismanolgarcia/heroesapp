import { useEffect } from 'react';
import { AppRouter } from './router/AppRouter';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const HeroesApp = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    AOS.refresh();
  }, []);

  return (
    <div>
      <AppRouter />
    </div>
  );
};
