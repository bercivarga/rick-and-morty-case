import { FC, ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";

const PageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box w="100vw" h="100vh">
      <Box w="full" h="100px" bg="rnmBlue.300">
        <Flex>navbar</Flex>
      </Box>
      <Box h="calc(100vh - 100px)" bg="rnmMagenta.100">
        {children}
        main content
      </Box>
    </Box>
  );
};

export default PageLayout;
