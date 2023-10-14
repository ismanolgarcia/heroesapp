import { useMemo } from 'react';
import { geHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => geHeroesByPublisher(publisher), [publisher]);

  return (
    <>
      {heroes.map((heroe) => (
        <HeroCard key={heroe.id} heroe={heroe} />
      ))}
    </>
  );
};
