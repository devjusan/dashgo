import { Box, Stack, Text } from '@chakra-ui/react';

interface INavSection {
  title: string;
  children: React.ReactNode;
}

const NavSection = ({ title, children }: INavSection) => (
  <Box>
    <Text fontWeight="bold" color="gray.400" fontSize="small">
      {title}
    </Text>
    <Stack spacing="4" mt="8" align="stretch">
      {children}
    </Stack>
  </Box>
);

export default NavSection;
