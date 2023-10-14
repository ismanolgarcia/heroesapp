import { Box, Center, Flex, HStack, Heading, Img, Text, useColorModeValue } from '@chakra-ui/react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { getHeroById } from '../helpers';
import { useMemo } from 'react';

export const HeroPage = () => {
  const navigate = useNavigate();
  const onReturn = () => {
    navigate(-1);
  };

  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);
  
  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  if (!hero) {
    return <Navigate to="/notfound" />;
  }

  return (
    <Center>
      <Box
        w="350px"
        rounded="sm"
        my={5}
        mx={[0, 5]}
        overflow="hidden"
        bg="white"
        border="1px"
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}
      >
        <Box h="3-0px" borderBottom="1px" borderColor="black">
          <Img
            src={`/assets/heroes/${id}.jpg`}
            roundedTop="sm"
            objectFit="cover"
            alt="Blog Image"
            data-aos="fade-right"
          />
        </Box>
        <Box p={2}>
          <Box
            bg="black"
            display="inline-block"
            px="5"
            py="1"
            color="white"
            mb="2"
          >
            <Text fontSize="xl" fontWeight="medium">
              {publisher}
            </Text>
          </Box>
          <Heading color="black" fontSize="3xl" noOfLines="1">
            {superhero}
          </Heading>
          <Text color="gray.500" fontSize="2xl" noOfLines="2">
            {alter_ego}
          </Text>
          <Text color="gray.500" fontSize="2xl" noOfLines="2">
            {first_appearance}
          </Text>
          <Text color="gray.500" fontSize="2xl" noOfLines="2">
            {characters}
          </Text>
        </Box>
        <HStack borderTop="2px" color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent="space-between"
            roundedBottom="sm"
            cursor="pointer"
            w="full"
          >
            <Text fontSize="xl" fontWeight="semibold" onClick={onReturn}>
              Return
            </Text>
            <IoReturnDownBackSharp onClick={onReturn} />
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
};
