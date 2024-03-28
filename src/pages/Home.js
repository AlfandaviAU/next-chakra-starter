import React, { useState } from 'react';
import {
  Image,
  Box,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  VStack,
} from '@chakra-ui/react';
import PageContainer from '@/components/PageContainer';

export const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <PageContainer title="Instagram">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="start"
        boxSize="sm"
        paddingTop={10}
        maxWidth={350}
        height={500}
        marginTop={50}
        border="1px solid #DBDBDB"
      >
        <VStack>
          <Image width={175} src="../logo.png" alt="Dan Abramov" />

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

          <InputGroup size="md">
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
        </VStack>
      </Box>
      <h1>Text input email</h1>

      <h1>Button login</h1>
      <h1>or divider</h1>
      <h1>login with fb</h1>
      <h1>forgot password</h1>
    </PageContainer>
  );
};
