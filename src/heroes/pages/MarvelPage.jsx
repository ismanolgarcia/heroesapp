import { Grid } from '@chakra-ui/react';
import { HeroList } from '../components';

export const MarvelPage = () => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
        xl: 'repeat(4, 1fr)',
      }}
      gap={3}
    >
      <HeroList publisher="Marvel Comics" />
    </Grid>
  );
};
