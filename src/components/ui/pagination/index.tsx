import { Box, Stack } from '@chakra-ui/react';
import PaginationItem from './PaginationItem';

const Pagination = () => (
  <Stack
    direction="row"
    mt="8"
    spacing="6"
    justifyContent="space-between"
    alignContent="center"
  >
    <Box>
      <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
    </Box>
    <Stack direction="row" spacing="2">
      <PaginationItem number={1} isCurrent />
      <PaginationItem number={2} />
      <PaginationItem number={3} />
      <PaginationItem number={4} />
    </Stack>
  </Stack>
);

export default Pagination;
