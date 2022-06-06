import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CharacterGrid from "../components/CharacterGrid";
import ErrorCard from "../components/ErrorCard";
import FilterMenu from "../components/FilterMenu";
import PaginationNav from "../components/PaginationNav";
import PathLayout from "../components/PathLayout";
import useGetCharacters, { QueryVars } from "../queries/characters";

const Characters = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filters, setFilters] = useState<QueryVars>();
  const { loading, data, error } = useGetCharacters(
    { ...filters },
    currentPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  if (error) {
    return <ErrorCard errorMessage={error.message} />;
  }

  return (
    <PathLayout title="All characters" currentPage={currentPage}>
      <Box mb={6}>
        <FilterMenu onSubmit={(newFilters) => setFilters({ ...newFilters })} />
      </Box>
      <CharacterGrid characters={data?.characters.results} loading={loading} />
      <PaginationNav
        prevPage={data?.characters.info.prev}
        nextPage={data?.characters.info.next}
        pagesCount={data?.characters.info.pages}
        handlePageSwitch={(pageNr: number) => setCurrentPage(pageNr)}
      />
    </PathLayout>
  );
};

export default Characters;
