
import { VStack, Text, HStack } from '@chakra-ui/react';
import fetchBin, { BIN_IDS } from './fetchJSONBin';
import wrapForSuspense from './wrapForSuspense';

const { read } = wrapForSuspense(fetchBin(BIN_IDS.POSTS, 10000));

const UserList = ({ user }) => {
    if (!user) {
        return <Text fontSize="xl">Please select a user to see their comments.</Text>
    }
    const comments = read();
    return (
    <VStack spacing="2" align="start">
        <Text>Comments made by {user}</Text>
        <VStack spacing="2" align="start">
            {comments[user].map((comment) => (<HStack>
                <Text fontSize="xl" key={comment}>{comment}</Text>
            </HStack>))}
        </VStack>
    </VStack>
    );
}

export default UserList;