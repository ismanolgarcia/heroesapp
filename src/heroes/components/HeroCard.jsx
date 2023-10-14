import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';

export const HeroCard = ({ heroe, url }) => {
  const [liked, setLiked] = useState(false);
  const { superhero, publisher, id, alter_ego } = heroe;

  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <Center>
      <Box
        w="280px"
        rounded="sm"
        my={5}
        mx={[0, 5]}
        overflow="hidden"
        bg="white"
        border="1px"
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}
      >
        <Box
          h="3-0px"
          borderBottom="1px"
          borderColor="black"
          data-aos="flip-left"
        >
          <Img
            src={heroImageUrl}
            roundedTop="sm"
            objectFit="cover"
            h="full"
            w="full"
            alt="Blog Image"
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
            <Text fontSize="xs" fontWeight="medium">
              {publisher}
            </Text>
          </Box>
          <Heading color="black" fontSize="2xl" noOfLines="1">
            {superhero}
          </Heading>
          <Text color="gray.500" noOfLines="2">
            {alter_ego}
          </Text>
        </Box>
        <HStack borderTop="1px" color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent="space-between"
            roundedBottom="sm"
            cursor="pointer"
            w="full"
          >
            <Link to={`/hero/${id}`}>
              <Text fontSize="md" fontWeight="semibold">
                View more
              </Text>
            </Link>
            <Link to={`/hero/${id}`}>
              <BsArrowUpRight />
            </Link>
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent="space-between"
            roundedBottom="sm"
            borderLeft="1px"
            cursor="pointer"
            onClick={() => setLiked(!liked)}
          >
            {liked ? (
              <BsHeartFill fill="red" fontSize="24px" />
            ) : (
              <BsHeart fontSize="24px" />
            )}
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
};
