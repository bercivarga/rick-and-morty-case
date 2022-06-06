import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";

const Home = () => {
  return (
    <Box>
      <Head>
        <title>Rick and Morty DB - Home</title>
      </Head>
      <Text as="h2" fontSize="4xl" fontWeight="bold">
        Home page
      </Text>
    </Box>
  );
};

export default Home;
