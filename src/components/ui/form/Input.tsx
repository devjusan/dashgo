import {
  FormControl,
  Input as ChakraInput,
  FormLabel,
  InputProps,
} from '@chakra-ui/react';

interface IInput extends InputProps {
  name: string;
  label: string;
}

const Input = ({ label, name, ...rest }: IInput) => (
  <FormControl>
    {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
    <ChakraInput
      name={name}
      id={name}
      focusBorderColor="pink.500"
      bgColor="gray.900"
      variant="filled"
      _hover={{ bg: 'gray.900' }}
      size="lg"
      {...rest}
    />
  </FormControl>
);

export default Input;
