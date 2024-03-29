import Sidebar from './Sidebar';
import { Box, Flex, Stack } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Flex m={3}>
      <Sidebar />
      <Box w="100%" marginLeft={{ base: '100px', md: '200px' }}>
        <main>{children}</main>
      </Box>
    </Flex>
  );
};

export default Layout;
