import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface IProfile {
  showProfileData?: boolean;
}

const Profile = ({ showProfileData = true }: IProfile) => (
  <Flex align="center">
    {showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Diego Fernandes</Text>
        <Text color="gray.300" fontSize="small">
          devjusan@hotmail.com
        </Text>
      </Box>
    )}
    <Avatar
      size="md"
      name="Junior Santos"
      src="https://github.com/devjusan.png"
    />
  </Flex>
);

export default Profile;
