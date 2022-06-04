import { Box, HStack, Flex, Text, useColorModeValue } from "@chakra-ui/react";
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

  const bannerBg = useColorModeValue("gray.300", "gray.700");

  if (!characters) {
    return <h1>Loading...</h1>;
  }

  return (
    <Box h="full" w="full">
      <Flex align="center" h="100px" px={6} bg={bannerBg}>
        <Text as="h1" fontSize="5xl" fontWeight="bold">
          Characters
        </Text>
      </Flex>
      <Box h="calc(100% - 100px)" overflowY="scroll" p={6}>
        <HStack h="unset" gap={4} spacing={0} flexWrap="wrap">
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
    </Box>
  );
};

export default Characters;
