import {
  Box,
  Text,
  Grid,
  GridItem,
  Skeleton,
  useBreakpointValue,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { FC } from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { CharacterModel } from "../queries/characters";
import CharacterCard from "./CharacterCard";

const CharacterGrid: FC<{
  loading: boolean;
  characters: CharacterModel[] | undefined;
  pagesCount: number;
  prevPage: number;
  nextPage: number;
  handlePageSwitch: (pageNr: number) => void;
}> = ({
  loading,
  characters,
  prevPage,
  nextPage,
  pagesCount,
  handlePageSwitch,
}) => {
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
            bg="rnmGreen.700"
          >
            <Text fontSize="xl">No results found. Try again!</Text>
          </Box>
        )}
      </Grid>
      <Box w="full" mt={6}>
        <ButtonGroup
          variant="solid"
          colorScheme="gray"
          w="full"
          flexDir="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <IconButton
            aria-label="previous"
            icon={<MdSkipPrevious />}
            onClick={() => handlePageSwitch(prevPage)}
          />
          <Text>
            Page {nextPage - 1 ?? prevPage + 1} of {pagesCount}
          </Text>
          <IconButton
            aria-label="previous"
            icon={<MdSkipNext />}
            onClick={() => handlePageSwitch(nextPage)}
          />
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default CharacterGrid;
