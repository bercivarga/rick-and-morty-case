import {
  Box,
  Flex,
  Image,
  Divider,
  Text,
  useColorModeValue,
  Badge,
  HStack,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";
import NextLink from "next/link";
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
  const infoColor = useColorModeValue("rnmBlue.900", "rnmBlue.200");

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
              color={infoColor}
              colorScheme="rnmBlue"
              variant="link"
              w="full"
              textAlign="center"
            >
              <NextLink
                href={{ pathname: `/location/[id]`, query: { id: origin.id } }}
              >
                <Button
                  whiteSpace="normal"
                  disabled={origin.name === "unknown"}
                >
                  Origin: {origin.name}
                </Button>
              </NextLink>
              <Divider w="20%" my={2} />
              <NextLink
                href={{
                  pathname: `/location/[id]`,
                  query: { id: location.id },
                }}
              >
                <Button
                  whiteSpace="normal"
                  disabled={location.name === "unknown"}
                >
                  Last seen @ {location.name}
                </Button>
              </NextLink>
              <Divider w="20%" my={2} />
              <NextLink
                href={{
                  pathname: `/episode/[id]`,
                  query: { id: episodes[episodes.length - 1]?.id },
                }}
              >
                <Button whiteSpace="normal" title="Go to last episode">
                  In {episodes.length}{" "}
                  {episodes.length > 1 ? "episodes" : "episode"} (Go to last)
                </Button>
              </NextLink>
            </ButtonGroup>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CharacterCard;
