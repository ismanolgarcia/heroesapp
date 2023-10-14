import { Box, Text } from '@chakra-ui/react';

export const TagSearch = ({ texto }) => {
  return (
    <Box
      bg="cyan.500"
      display="inline-block"
      px="5"
      py="1"
      color="white"
      mb="2"
    >
      <Text fontSize="xl" fontWeight="medium">
        {texto}
      </Text>
    </Box>
  );
};
