import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const getUser = (e) => {
    setUser(e.target.value);
  };

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    user && login(user);
    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      padding="4"
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Login
        </Heading>
        <FormControl id="text" isRequired>
          <FormLabel>User</FormLabel>
          <Input
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={user}
            onChange={getUser}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            onClick={onLogin}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};
