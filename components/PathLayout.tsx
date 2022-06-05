import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const PathLayout: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  const bannerBg = useColorModeValue("rnmBlue.200", "gray.700");

  return (
    <Box h="full" w="full">
      <Flex align="center" h="100px" px={6} bg={bannerBg}>
        <Text
          as="h1"
          fontSize="5xl"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {title}
        </Text>
      </Flex>
      <Box h="calc(100% - 100px)" overflowY="scroll" p={6}>
        {children}
      </Box>
    </Box>
  );
};

export default PathLayout;
