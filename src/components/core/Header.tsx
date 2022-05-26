import { Flex, Input, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import {
  RiSearchLine,
  RiNotificationLine,
  RiUserAddLine,
} from 'react-icons/ri';

const Header = () => (
  <Flex
    as="header"
    w="100%"
    maxWidth={1480}
    h="20"
    mx="auto"
    mt="4"
    px="6"
    align="center"
  >
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
      dashgo
      <Text color="pink.500" ml="1" as="span">
        .
      </Text>
    </Text>
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.400' }}
        px="4"
        mr="4"
      />

      <Icon as={RiSearchLine} />
    </Flex>
    <Flex align="center" ml="auto">
      <HStack
        gap="4"
        mx="8"
        pr="8"
        py="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
      >
        {' '}
        <Icon as={RiNotificationLine} fontSize="20" />
        <Icon as={RiUserAddLine} fontSize="20" />
      </HStack>
      <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Diego Fernandes</Text>
          <Text color="gray.300" fontSize="small">
            devjusan@hotmail.com
          </Text>
        </Box>
        <Avatar
          size="md"
          name="Junior Santos"
          src="https://github.com/devjusan.png"
        />
      </Flex>
    </Flex>
  </Flex>
);

export default Header;
