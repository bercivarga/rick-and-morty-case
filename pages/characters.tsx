import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

const Characters = () => {
  const [characters, setCharacters] = useState<any[]>();

  const gridRows = useBreakpointValue({
    base: 1,
    sm: 2,
    lg: 3,
    xl: 4,
  });

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
        <Grid h="full" templateColumns={`repeat(${gridRows}, 1fr)`} gap={4}>
          {characters.map((char) => (
            <GridItem rowSpan={1} colSpan={1}>
              <CharacterCard
                gender={char.gender}
                image={char.image}
                location={char.location}
                name={char.name}
                species={char.species}
                status={char.status}
                type={char.type}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Characters;
