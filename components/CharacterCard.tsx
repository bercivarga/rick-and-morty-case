import {
  Box,
  Flex,
  Image,
  Divider,
  Text,
  useColorModeValue,
  ButtonGroup,
  Button,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { CharacterModel } from "../queries/characters";

const CharacterCard: FC<CharacterModel> = ({
  image,
  name,
  status,
  gender,
  species,
  type,
  location,
  origin,
  episodes,
}) => {
  const cardBg = useColorModeValue("gray.100", "gray.800");

  return (
    <Box
      bg={cardBg}
      borderRadius={8}
      w="full"
      h="full"
      transition="background-color .2s ease-in-out"
    >
      <Flex direction="column" h="full" align="center">
        <Flex flexDir="column" alignItems="center" p={6}>
          <Box w="120px" h="120px" borderRadius="full" overflow="hidden">
            <Image
              src={image}
              alt={`${name}'s image`}
              w="full"
              h="full"
              objectFit="cover"
            />
          </Box>
          <Text
            as="h4"
            fontSize="2xl"
            fontWeight="bold"
            marginTop={3}
            textAlign="center"
          >
            {name}
          </Text>
          <Divider />
        </Flex>
        <Flex
          p="0 24px 24px 24px"
          h="full"
          flexDir="column"
          justify="space-between"
          align="flex-start"
        >
          <HStack
            gap={1}
            alignContent="center"
            justify="center"
            w="full"
            flexWrap="wrap"
            textTransform="capitalize"
          >
            <Badge title="Status" p={1} colorScheme="rnmYellow">
              🫀 {status}
            </Badge>
            <Badge title="Gender" p={1} colorScheme="green">
              ⚤ {gender}
            </Badge>
            <Badge title="Species" p={1} colorScheme="rnmMagenta">
              🧬 {species}
            </Badge>
            {type && (
              <Badge
                title="Type"
                p={1}
                colorScheme="rnmRed"
                whiteSpace="normal"
              >
                🦄 {type}
              </Badge>
            )}
          </HStack>
          <Box mt={8} w="full">
            <ButtonGroup
              flexDir="column"
              alignItems="center"
              variant="link"
              colorScheme="rnmBlue"
              spacing={0}
              w="full"
            >
              <Button whiteSpace="normal">Origin: {origin.name}</Button>
              <Divider w="20%" my={2} />
              <Button whiteSpace="normal">Last seen @ {location.name}</Button>
              <Divider w="20%" my={2} />
              <Button whiteSpace="normal">In {episodes.length} episodes</Button>
            </ButtonGroup>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CharacterCard;
