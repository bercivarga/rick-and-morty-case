import {
  Box,
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
    return <h1>Error happened</h1>;
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
            data?.characters.results.map((char: any) => (
              <GridItem key={char.id} rowSpan={1} colSpan={1}>
                <CharacterCard
                  gender={char.gender}
                  image={char.image}
                  location={char.location}
                  name={char.name}
                  species={char.species}
                  status={char.status}
                  type={char.type}
                />
              </GridItem>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Characters;
