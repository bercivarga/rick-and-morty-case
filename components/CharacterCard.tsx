import {
  Box,
  Flex,
  Image,
  Divider,
  Text,
  useColorModeValue,
  ButtonGroup,
  Button,
  Icon,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { MdArrowForward } from "react-icons/md";

interface CharacterCardModel {
  image: string;
  name: string;
  status: string;
  gender: string;
  species: string;
  type: string;
  location: {
    name: string;
    url: string;
  };
}

const CharacterCard: FC<CharacterCardModel> = ({
  image,
  name,
  status,
  gender,
  species,
  type,
  location,
}) => {
  const cardBg = useColorModeValue("gray.50", "gray.800");

  return (
    <Box
      bg={cardBg}
      borderRadius={8}
      w="min-content"
      h="min-content"
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
          <Text as="h4" fontSize="2xl" fontWeight="bold" marginTop={3}>
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
            spacing={4}
            alignContent="center"
            justify="center"
            w="full"
            flexWrap="wrap"
            textTransform="capitalize"
          >
            <Badge p={1} colorScheme="rnmYellow">
              🫀 {status}
            </Badge>
            <Badge p={1} colorScheme="rnmBlue">
              ⚤ {gender}
            </Badge>
            <Badge p={1} colorScheme="rnmMagenta">
              🧬 {species}
            </Badge>
            {type && (
              <Badge p={1} colorScheme="rnmRed">
                🦄 {type}
              </Badge>
            )}
          </HStack>
          <Box mt={2}>
            <ButtonGroup
              flexDir="column"
              alignItems="center"
              variant="link"
              colorScheme="gray"
              spacing={0}
            >
              <Button
                rightIcon={
                  <Icon
                    as={MdArrowForward}
                    fontSize="xl"
                    color="rnmGreen.400"
                  />
                }
              >
                Last seen: @{location.name}
              </Button>
              <Button
                rightIcon={
                  <Icon
                    as={MdArrowForward}
                    fontSize="xl"
                    color="rnmGreen.400"
                  />
                }
              >
                Episodes
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CharacterCard;
