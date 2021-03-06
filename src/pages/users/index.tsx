import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import Header from '../../components/core/header';
import Pagination from '../../components/ui/pagination';
import Sidebar from '../../components/ui/sidebar';

const UserList = () => (
  <Box>
    <Header />

    <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
      <Sidebar />
      <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        <Flex mb="8" justifyContent="space-between" alignContent="center">
          <Heading size="lg" fontWeight="normal">
            Usuários
          </Heading>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="pink"
            leftIcon={<Icon as={RiAddLine} fontSize="16" />}
          >
            Criar novo
          </Button>
        </Flex>
        <Table colorScheme="whiteAlpha">
          <Thead>
            <Tr>
              <Td>
                {' '}
                <Checkbox colorScheme="pink" />
              </Td>
              <Th>Usuário</Th>
              <Th>Data de cadastro</Th>
              <Th width="8" />
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td px="6">
                <Checkbox colorScheme="pink" />
              </Td>
              <Td>
                <Box>
                  <Text fontWeight="bold">Diego Fernandes</Text>
                  <Text fontSize="small" color="gray.300">
                    devjusan@hotmail.com
                  </Text>
                </Box>
              </Td>
              <Td>04 de Abril, de 2021</Td>
              <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="purple"
                  leftIcon={<Icon as={RiPencilLine} />}
                >
                  Editar
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Pagination />
      </Box>
    </Flex>
  </Box>
);

export default UserList;
