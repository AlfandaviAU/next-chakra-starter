/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import {
  Image,
  Box,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  VStack,
  HStack,
  Text,
} from '@chakra-ui/react';
import PageContainer from '@/components/PageContainer';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    console.log(email);
  }, [email]);
  return (
    <PageContainer title="Instagram">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="start"
        // boxSize="sm"
        // paddingTop={10}
        padding={10}
        paddingBottom={5}
        // paddingBottom={10}
        maxWidth={350}
        border="1px solid #DBDBDB"
      >
        <VStack>
          <Image
            width={200}
            src="../logo.png"
            alt="Dan Abramov"
            marginBottom={25}
          />

          <InputGroup size="md">
            <Input
              type="text"
              placeholder="Phone number, username, or email"
              fontSize="xs"
              minW="270"
              px={2}
              bgColor="#FAFAFA"
              borderRadius={0}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>

          <InputGroup size="md" marginBottom={10}>
            <Input
              fontSize="xs"
              type={show ? 'text' : 'password'}
              placeholder="Password"
              minW="270"
              px={2}
              bgColor="#FAFAFA"
              borderRadius={0}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password === '' ? (
              ''
            ) : (
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                  bg="transparent"
                  fontWeight="bold"
                  _hover={{ textColor: 'gray.500' }}
                >
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            )}
          </InputGroup>
          <InputGroup>
            <Button
              h="1.75rem"
              variant="solid"
              size="sm"
              // onClick={handleClick}
              backgroundColor="#0095F6"
              textColor="white"
              bg="transparent"
              fontWeight="bold"
              width={270}
              marginTop={1}
              py={4}
              _hover={{ backgroundColor: '#1A77F2' }}
            >
              Login
            </Button>
          </InputGroup>

          <Image src="../or.png" alt="Dan Abramov" marginBottom={25} />
          <HStack
            cursor="pointer"
            // onClick={(e) => alert('Hello')}
            paddingBottom={2}
            paddingTop={5}
          >
            <Image src="../fb.png" width={4} />
            <Text fontSize="sm" fontWeight="bold" textColor="#4D5986">
              Log in with Facebook
            </Text>
          </HStack>
          <HStack cursor="pointer" onClick={() => alert('Forget password')}>
            <Text fontSize="xs" fontWeight="500" textColor="#2D436F">
              Forgot password
            </Text>
          </HStack>
        </VStack>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="start"
        padding={5}
        maxWidth={350}
        border="1px solid #DBDBDB"
      >
        <HStack paddingX={12}>
          <Text fontSize="sm" fontWeight="500">
            <span>{`Don't have an account?`}</span>{' '}
            <span
              style={{
                fontWeight: 'bold',
                color: '#0095F6',
                cursor: 'pointer',
              }}
              onClick={() => alert('Hello')}
            >
              Sign up
            </span>
          </Text>
        </HStack>
      </Box>
      <Image src="../gta.png" alt="GTA" />

      <Box paddingTop={12}>
        <Image src="../footer.png" alt="Footer" />
      </Box>
    </PageContainer>
  );
};

export default Home;
