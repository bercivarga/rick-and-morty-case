import {
  Box,
  Grid,
  GridItem,
  Skeleton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FC } from "react";
import NextLink from "next/link";
import { EpisodeModel } from "../queries/episode";
import { LocationModel } from "../queries/locations";
import ListButton from "./ListButton";

interface ListGridModel {
  uriPath: string;
  loading: boolean;
  episodes?: EpisodeModel[];
  locations?: LocationModel[];
}

const ListGrid: FC<ListGridModel> = ({
  loading,
  uriPath,
  episodes,
  locations,
}) => {
  const gridColumns = useBreakpointValue({
    base: 1,
    md: 2,
    xl: 4,
    "2xl": 6,
  });

  return (
    <Box>
      <Grid
        h="full"
        templateColumns={`repeat(${gridColumns}, minmax(0, 1fr))`}
        gap={4}
      >
        {loading &&
          new Array(20).fill(1).map(() => (
            <GridItem key={Math.random()} colSpan={1} rowSpan={1}>
              <Skeleton h="200px" borderRadius={4} />
            </GridItem>
          ))}
        {!loading &&
          locations &&
          locations.map((location) => (
            <NextLink
              key={location.id}
              href={{
                pathname: `/${uriPath}/[id]`,
                query: { id: location.id },
              }}
              passHref
            >
              <GridItem colSpan={1} rowSpan={1}>
                <ListButton
                  title={location.name}
                  firstText={`📍
                    ${
                      location.dimension === "unknown"
                        ? "Unknown location"
                        : `Located in ${location.dimension}`
                    }`}
                  secondText={`🪐 Type of ${location.type}`}
                  thirdText={`👶 Residents: ${location.residents.length}`}
                />
              </GridItem>
            </NextLink>
          ))}
        {!loading &&
          episodes &&
          episodes.map((episode) => (
            <NextLink
              key={episode.id}
              href={{
                pathname: `/${uriPath}/[id]`,
                query: { id: episode.id },
              }}
              passHref
            >
              <GridItem colSpan={1} rowSpan={1}>
                <ListButton
                  title={episode.name}
                  firstText={`📺 ${episode.episode}`}
                  secondText={`📡 Aired ${episode.air_date}`}
                  thirdText={`👶 ${episode.characters.length} cast members`}
                />
              </GridItem>
            </NextLink>
          ))}
      </Grid>
    </Box>
  );
};

ListGrid.defaultProps = {
  locations: undefined,
  episodes: undefined,
};

export default ListGrid;
