import { useColorMode, VStack } from '@chakra-ui/react';

const PageContainer = ({ children }) => {
  useColorMode();

  return (
    <VStack
      justify="center"
      paddingTop="11vh"
      transition="background 100ms linear"
    >
      {/* <Heading as="h1" size="2xl" mb={6} textAlign="center">
        {title}
      </Heading> */}
      {children}
    </VStack>
  );
};

export default PageContainer;
