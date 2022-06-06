import {
  Box,
  Text,
  Grid,
  GridItem,
  Skeleton,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { MdOutlineWarning } from "react-icons/md";
import { CharacterModel } from "../queries/characters";
import CharacterCard from "./CharacterCard";

const CharacterGrid: FC<{
  characters: CharacterModel[] | undefined;
  loading?: boolean;
}> = ({ loading, characters }) => {
  const gridRows = useBreakpointValue({
    base: 1,
    sm: 2,
    xl: 4,
    "3xl": 6,
  });

  return (
    <Box>
      <Grid h="full" templateColumns={`repeat(${gridRows}, 1fr)`} gap={4}>
        {loading &&
          new Array(20).fill(1).map(() => (
            <GridItem key={Math.random()} rowSpan={1} colSpan={1}>
              <Skeleton h="300px" borderRadius={4} />
            </GridItem>
          ))}
        {!loading &&
          characters?.map((char) => (
            <GridItem key={char.id} rowSpan={1} colSpan={1}>
              <CharacterCard {...char} />
            </GridItem>
          ))}
        {!loading && characters?.length === 0 && (
          <Box
            w="full"
            h="min-content"
            borderRadius={4}
            p={6}
            color="white"
            bg="rnmYellow.600"
            fontSize="2xl"
          >
            <Icon as={MdOutlineWarning} />
            <Text>No results found.</Text>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

CharacterGrid.defaultProps = {
  loading: false,
};

export default CharacterGrid;
