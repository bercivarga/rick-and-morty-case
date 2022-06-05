import CharacterGrid from "../components/CharacterGrid";
import ErrorCard from "../components/ErrorCard";
import PathLayout from "../components/PathLayout";
import useGetCharacters from "../queries/characters";

const Characters = () => {
  const { loading, data, error } = useGetCharacters({});

  if (error) {
    return <ErrorCard errorMessage={error.message} />;
  }

  return (
    <PathLayout title="characters">
      <CharacterGrid characters={data?.characters.results} loading={loading} />
    </PathLayout>
  );
};

export default Characters;
