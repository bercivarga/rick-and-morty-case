import {
  Box,
  Button,
  Divider,
  Fade,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Icon,
  Input,
  Link,
  Spinner,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import { GiFrankensteinCreature } from "react-icons/gi";
import Head from "next/head";
import PathLayout from "../components/PathLayout";
import useGenerator from "../hooks/useGenerator";
import { SentenceModel } from "../lib/generateSentence";
import ErrorCard from "../components/ErrorCard";
import Captcha from "../components/Captcha";

const Generator = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [name, setName] = useState<string>();
  const [species, setSpecies] = useState<string>();
  const [planet, setPlanet] = useState<string>();
  const [sentence, setSentence] = useState<SentenceModel>();
  const { data, error } = useGenerator(sentence);

  useEffect(() => {
    if (!data) {
      return;
    }

    setLoading(false);
  }, [data]);

  const textWidth = useBreakpointValue({
    base: "full",
    xl: "60%",
  });

  const gridColumns = useBreakpointValue({
    base: 1,
    md: 4,
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowCaptcha(true);
  }

  function handleCaptcha(result: boolean) {
    setShowCaptcha(false);

    if (!result || !(name && species && planet)) {
      return;
    }

    setSentence({
      name,
      species,
      planet,
    });

    setLoading(true);
  }

  if (error) {
    return <ErrorCard errorMessage={error.message} />;
  }

  return (
    <PathLayout title="Generator">
      <Head>
        <title>Character backstory generator</title>
      </Head>
      {showCaptcha && (
        <Captcha
          show={showCaptcha}
          callback={(result) => handleCaptcha(result)}
        />
      )}
      <Box w={textWidth}>
        <Text as="h2" fontSize="2xl" fontWeight="bold">
          Generate your own Rick and Morty character!
        </Text>
        <Text>
          Type in your character&apos;s name, species, and home planet, and let{" "}
          <Link
            color="rnmBlue.400"
            href="https://openai.com/api/"
            target="_blank"
          >
            OpenAI&apos;s
          </Link>{" "}
          engine take care of the rest for you.
        </Text>
        <Text fontStyle="italic" mt={4}>
          In order to reduce the load on the API, you can only request data once
          per page load.
        </Text>
      </Box>
      <Divider my={8} />
      <Text as="h4" fontSize="xl" fontWeight="bold">
        Start by filling in their details:
      </Text>
      <Flex flexDir="column" mt={4}>
        <Box>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Grid
              gap={4}
              templateColumns={`repeat(${gridColumns}, 1fr)`}
              alignItems="flex-end"
            >
              <GridItem>
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    id="name"
                    placeholder="E.g. Gazorpazorp"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isRequired>
                  <FormLabel htmlFor="species">Species</FormLabel>
                  <Input
                    id="species"
                    placeholder="E.g. bird-person"
                    onChange={(e) => setSpecies(e.target.value)}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isRequired>
                  <FormLabel htmlFor="planet">Home planet</FormLabel>
                  <Input
                    id="planet"
                    placeholder="E.g. Plompf"
                    onChange={(e) => setPlanet(e.target.value)}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <Button
                  variant="solid"
                  colorScheme="rnmMagenta"
                  type="submit"
                  w="full"
                  disabled={!!data}
                  isLoading={loading}
                >
                  {!data ? "Create!" : "Attempt used"}
                </Button>
              </GridItem>
            </Grid>
          </form>
        </Box>
        <Text as="h4" fontSize="xl" fontWeight="bold" mt={8}>
          And read their back-story here:
        </Text>
        <Box
          mt={8}
          bg="gray.700"
          color="gray.100"
          w="full"
          h="full"
          p={6}
          borderRadius={8}
        >
          {data && (
            <Fade in={!!data}>
              <Text fontSize="lg" fontStyle="italic">
                &quot;{data}&quot;
              </Text>
            </Fade>
          )}
          {!loading && !data && (
            <Flex flexDir="row" gap={2} align="center">
              <Icon fontSize="2xl" as={GiFrankensteinCreature} />
              <Text fontSize="lg">Your character is waiting for you!</Text>
            </Flex>
          )}
          {loading && (
            <Fade in={loading}>
              <Spinner size="xl" />
            </Fade>
          )}
        </Box>
      </Flex>
    </PathLayout>
  );
};

export default Generator;
