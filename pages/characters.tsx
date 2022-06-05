import { Box } from "@chakra-ui/react";
import { useState } from "react";
import CharacterGrid from "../components/CharacterGrid";
import ErrorCard from "../components/ErrorCard";
import FilterMenu from "../components/FilterMenu";
import PathLayout from "../components/PathLayout";
import useGetCharacters, { QueryVars } from "../queries/characters";

const Characters = () => {
  const [filters, setFilters] = useState<QueryVars>();
  const { loading, data, error } = useGetCharacters({ ...filters });

  if (error) {
    return <ErrorCard errorMessage={error.message} />;
  }

  return (
    <PathLayout title="characters">
      <Box mb={6}>
        <FilterMenu onSubmit={(newFilters) => setFilters({ ...newFilters })} />
      </Box>
      <CharacterGrid characters={data?.characters.results} loading={loading} />
    </PathLayout>
  );
};

export default Characters;
