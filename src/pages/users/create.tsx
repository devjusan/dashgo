import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import Header from '../../components/core/header';
import Input from '../../components/ui/form/Input';
import Sidebar from '../../components/ui/sidebar';

const CreateUser = () => (
  <Box>
    <Header />

    <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
      <Sidebar />

      <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        <Heading size="lg" fontWeight="normal">
          Criar usuário
        </Heading>
        <Divider my="6" borderColor="gray.700" />
        <Stack spacing="8">
          <SimpleGrid minChildWidth={240} spacing="8" w="100%">
            <Input name="name" label="Nome completo" />
            <Input name="email" label="E-mail" type="email" />
          </SimpleGrid>
          <SimpleGrid minChildWidth={240} spacing="8" w="100%">
            <Input name="password" label="Senha" type="password" />
            <Input
              name="password_confirmation"
              label="Confirme a senha"
              type="password"
            />
          </SimpleGrid>
        </Stack>
        <Flex mt="8" justifyContent="flex-end">
          <HStack spacing="4">
            <Button colorScheme="whiteAlpha">Cancelar</Button>
            <Button colorScheme="pink">Salvar</Button>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  </Box>
);

export default CreateUser;
