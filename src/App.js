import { Suspense, useState } from 'react';
import { ChakraProvider, Container, Flex, SkeletonText, Spinner, Center } from '@chakra-ui/react';
import UserList from './UserList';
import Comments from './Comments';

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <ChakraProvider>
      <Container maxW="2xl" mt="4">
        <Suspense fallback={(
          <Center w="2xl" h="2xl">
            <Spinner />
          </Center>
        )}>
          <Flex>
            <UserList mr="4" flexBasis="25%" onUserSelect={setUser} />
            <Suspense fallback={(
              <Center w="100%" h="100%" mt="4">
                <SkeletonText noOfLines={4} minW="100%" />
              </Center>
            )}>
              <Comments flexBasis="75%" user={user} />
            </Suspense>
          </Flex>
        </Suspense>
      </Container>
    </ChakraProvider>
  );
};
export default App;
