import { Box, Grid, Input, FormLabel } from '@chakra-ui/react';
import { HeroCard, TagSearch } from '../components';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 2) {
      return;
    }
    navigate(`?q=${searchText}`);
  };

  return (
    <Box my={5} mx={[0, 5]}>
      <form onSubmit={onSearchSubmit}>
        <FormLabel fontSize='2xl'>Search</FormLabel>
        <Input
          mb="5"
          placeholder="Search..."
          name="searchText"
          value={searchText}
          onChange={onInputChange}
        />
      </form>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap={3}
      >
        {heroes.map((hero) => (
          <HeroCard key={hero.id} heroe={hero} />
        ))}
      </Grid>

      {q === '' ? (
        <TagSearch texto="Search a hero" />
      ) : (
        heroes.length === 0 && <TagSearch texto={`no hero with ${q}`} />
      )}
    </Box>
  );
};
