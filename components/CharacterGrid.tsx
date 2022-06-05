import { Grid, GridItem, Skeleton, useBreakpointValue } from "@chakra-ui/react";
import { FC } from "react";
import { CharacterModel } from "../queries/characters";
import CharacterCard from "./CharacterCard";

const CharacterGrid: FC<{
  loading: boolean;
  characters: CharacterModel[] | undefined;
}> = ({ loading, characters }) => {
  const gridRows = useBreakpointValue({
    base: 1,
    sm: 2,
    lg: 3,
    xl: 4,
  });

  return (
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
    </Grid>
  );
};

export default CharacterGrid;
