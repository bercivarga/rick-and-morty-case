import { Box, Flex, Tag, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  const contentHeight = useBreakpointValue({
    base: 100,
    md: 0,
  });

  return (
    <Box>
      <Head>
        <title>Rick and Morty DB - Home</title>
      </Head>
      <Flex
        position="absolute"
        top={0}
        left={0}
        align="center"
        justify="center"
        w="full"
        h={`calc(100vh - ${contentHeight}px)`}
        p={6}
        textAlign="center"
        overflowY="scroll"
      >
        <Box>
          <Text fontWeight="black" fontSize="5xl" mb={0}>
            Welcome to the
          </Text>
          <Image src="/rnm_banner.png" priority width={640} height={272} />
          <Text fontWeight="black" fontSize="5xl">
            database
          </Text>
          <Text fontSize="xl">Explore the series&apos; enormous universe.</Text>
          <Tag p={2} fontSize="md" fontStyle="italic" mt={4}>
            Hint: Make sure to try the character generator!
          </Tag>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
