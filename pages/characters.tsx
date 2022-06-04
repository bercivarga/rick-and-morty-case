import { Box, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

const Characters = () => {
  const [characters, setCharacters] = useState<any[]>();

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        setCharacters(data.results);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  if (!characters) {
    return <h1>Loading...</h1>;
  }

  return (
    <Box h="full" w="full">
      <Box h="150px">
        <Text as="h1" fontSize="4xl">
          Characters
        </Text>
      </Box>
      <HStack
        gap={4}
        p={6}
        h="calc(100% - 150px)"
        overflowY="scroll"
        flexWrap="wrap"
      >
        {characters.map((char) => (
          <CharacterCard
            gender={char.gender}
            image={char.image}
            location={char.location}
            name={char.name}
            species={char.species}
            status={char.status}
            type={char.type}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default Characters;
