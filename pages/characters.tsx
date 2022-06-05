import {
  Box,
  Divider,
  Grid,
  GridItem,
  Skeleton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import CharacterCard from "../components/CharacterCard";
import PathLayout from "../components/PathLayout";
import useGetCharacters from "../queries/characters";

const Characters = () => {
  const { loading, data, error } = useGetCharacters({});

  const gridRows = useBreakpointValue({
    base: 1,
    sm: 2,
    lg: 3,
    xl: 4,
  });

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
    <PathLayout title="characters">
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
    </PathLayout>
  );
};

export default Characters;
