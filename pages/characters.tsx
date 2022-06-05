import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Skeleton,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import CharacterCard from "../components/CharacterCard";
import useGetCharacters from "../queries/characters";

const Characters = () => {
  const { loading, data, error } = useGetCharacters({});

  const gridRows = useBreakpointValue({
    base: 1,
    sm: 2,
    lg: 3,
    xl: 4,
  });

  const bannerBg = useColorModeValue("gray.300", "gray.700");

  if (error) {
    return (
      <Box p={6}>
        <Box color="white" bg="red.600" p={6}>
          <Text>Something went wrong while handling your request.</Text>
          <Text>Please try again later, or notify the maintainer.</Text>
          <Divider my={2} />
          <pre>{error.message}</pre>
        </Box>
      </Box>
    );
  }

  return (
    <Box h="full" w="full">
      <Flex align="center" h="100px" px={6} bg={bannerBg}>
        <Text as="h1" fontSize="5xl" fontWeight="bold">
          Characters
        </Text>
      </Flex>
      <Box h="calc(100% - 100px)" overflowY="scroll" p={6}>
        <Grid h="full" templateColumns={`repeat(${gridRows}, 1fr)`} gap={4}>
          {loading &&
            new Array(20).fill(1).map(() => (
              <GridItem key={Math.random()} rowSpan={1} colSpan={1}>
                <Skeleton h="300px" />
              </GridItem>
            ))}
          {!loading &&
            data?.characters.results.map((char) => (
              <GridItem key={char.id} rowSpan={1} colSpan={1}>
                <CharacterCard {...char} />
              </GridItem>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Characters;
