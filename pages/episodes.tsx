import { Grid, Text, GridItem, Skeleton, Button } from "@chakra-ui/react";
import { useState } from "react";
import NextLink from "next/link";
import ErrorCard from "../components/ErrorCard";
import PaginationNav from "../components/PaginationNav";
import PathLayout from "../components/PathLayout";
import { useGetEpisodes } from "../queries/episodes";

const Episodes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useGetEpisodes(currentPage);

  if (error) {
    return <ErrorCard errorMessage={error.message} />;
  }

  return (
    <PathLayout title="All episodes">
      <Grid h="full" templateColumns="repeat(5, 1fr)" gap={4}>
        {loading &&
          new Array(20).fill(1).map(() => (
            <GridItem key={Math.random()} colSpan={1} rowSpan={1}>
              <Skeleton h="200px" borderRadius={4} />
            </GridItem>
          ))}
        {!loading &&
          data?.episodes.results.map((episode) => (
            <GridItem key={episode.id} colSpan={1} rowSpan={1}>
              <NextLink
                href={{
                  pathname: "/episode/[id]",
                  query: { id: episode.id },
                }}
                passHref
              >
                <Button
                  variant="solid"
                  colorScheme="rnmBlue"
                  flexDir="column"
                  gap={2}
                  h="fit-content"
                  w="full"
                  p={6}
                >
                  <Text fontSize="xl" fontWeight="bold">
                    {episode.name}
                  </Text>
                  <Text>📺 {episode.episode}</Text>
                  <Text>📡 {episode.air_date}</Text>
                  <Text>👶 {episode.characters.length} cast members</Text>
                </Button>
              </NextLink>
            </GridItem>
          ))}
      </Grid>
      <PaginationNav
        prevPage={data?.episodes.info.prev}
        nextPage={data?.episodes.info.next}
        pagesCount={data?.episodes.info.pages}
        handlePageSwitch={(pageNr: number) => setCurrentPage(pageNr)}
      />
    </PathLayout>
  );
};

export default Episodes;
