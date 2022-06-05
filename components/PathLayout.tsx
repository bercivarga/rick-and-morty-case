import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { FC, ReactNode, useEffect, useRef } from "react";

const PathLayout: FC<{
  title: string;
  children: ReactNode;
  currentPage?: number;
}> = ({ title, children, currentPage }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!currentPage) return;
    ref.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const bannerBg = useColorModeValue("rnmBlue.600", "gray.700");

  return (
    <Box h="full" w="full">
      <Flex align="center" h="100px" px={6} bg={bannerBg}>
        <Text
          color="white"
          as="h1"
          fontSize="5xl"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {title}
        </Text>
      </Flex>
      <Box ref={ref} h="calc(100% - 100px)" overflowY="scroll" p={6}>
        {children}
      </Box>
    </Box>
  );
};

PathLayout.defaultProps = {
  currentPage: undefined,
};

export default PathLayout;
