
import { VStack, Text, HStack, Avatar } from '@chakra-ui/react';
import fetchBin, { BIN_IDS } from './fetchJSONBin';
import wrapForSuspense from './wrapForSuspense';

const { read } = wrapForSuspense(fetchBin(BIN_IDS.APPLICATION));

const UserList = ({ onUserSelect, ...props }) => {
  const { users } = read();
  return (
    <VStack spacing="2" align="start" {...props}>
        <Text d="block" fontSize="xl">Users:</Text>
        <VStack spacing="2" align="start">
            {users.map((user) => (
                <HStack _hover={{ cursor: 'pointer' }} onClick={() => onUserSelect(user)}>
                    <Avatar name={user} mr="2" />
                    <Text fontSize="xl" key={user}>{user}</Text>
                </HStack>
            ))}
        </VStack>
    </VStack>
  );
}

export default UserList;