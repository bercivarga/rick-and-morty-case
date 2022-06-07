import {
  Portal,
  Box,
  Flex,
  Text,
  Fade,
  Grid,
  GridItem,
  Icon,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import NextImage from "next/image";
import { MdCheck } from "react-icons/md";

interface CaptchaModel {
  show: boolean;
  callback: (result: boolean) => void;
}

const captchaImages = [
  "dinglebop",
  "kjube",
  "hizzard",
  "sun",
  "schlommy",
  "plompor",
  "wranlur",
  "aqrta",
  "fleeb",
];

const answers = ["dinglebop", "fleeb", "hizzard", "schlommy"];

const Captcha: FC<CaptchaModel> = ({ show, callback }) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  function handleClick(image: string) {
    const included = selectedImages.includes(image);

    if (included) {
      const filtered = selectedImages.filter((img) => img !== image);
      setSelectedImages(filtered);
      return;
    }

    setSelectedImages([...selectedImages, image]);
  }

  function handleSubmit() {
    let count = 0;

    selectedImages.forEach((image) => {
      if (answers.includes(image)) {
        count += 1;
      }
    });

    if (count === answers.length && answers.length === selectedImages.length) {
      setIsError(false);
      callback(true);
      return;
    }

    setIsError(true);
  }

  return (
    <Portal>
      <Fade in={show}>
        <Box
          pos="absolute"
          zIndex={3}
          top={0}
          left={0}
          w="100vw"
          h="100vh"
          bg="blackAlpha.800"
          p={4}
        >
          <Flex h="full" w="full" justify="center" align="center">
            <Box bg="gray.300" color="black" p={6} borderRadius={8}>
              <Text fontSize="xl" fontWeight="bold">
                Before you continue...
              </Text>
              <Text>Select all ingredients of a plumbus</Text>
              <Grid
                mt={4}
                templateColumns="repeat(3, minmax(0, 1fr))"
                templateRows="repeat(3, minmax(0, 1fr))"
                border="2px solid white"
                borderRadius={8}
                overflow="hidden"
              >
                {captchaImages.map((image) => (
                  <GridItem
                    onClick={() => handleClick(image)}
                    pos="relative"
                    key={image}
                    colSpan={1}
                    rowSpan={1}
                  >
                    <Flex w="full" h="full">
                      <NextImage
                        alt={image}
                        src={`/${image}.jpg`}
                        width={100}
                        height={100}
                        priority
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Flex>
                    {selectedImages.includes(image) && (
                      <Flex
                        bg="blackAlpha.800"
                        color="green"
                        align="center"
                        justify="center"
                        w="full"
                        h="full"
                        fontSize="xl"
                        position="absolute"
                        top={0}
                        left={0}
                      >
                        <Icon as={MdCheck} />
                      </Flex>
                    )}
                  </GridItem>
                ))}
              </Grid>
              <Text mt={2} fontSize="sm">
                powered by PlumbusCaptcha
              </Text>
              <ButtonGroup w="full" justifyContent="space-between" mt={4}>
                <Button
                  variant="solid"
                  colorScheme="red"
                  onClick={() => callback(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="solid"
                  colorScheme="green"
                  onClick={() => handleSubmit()}
                >
                  Submit
                </Button>
              </ButtonGroup>
              {isError && (
                <Text
                  mt={2}
                  w="full"
                  textAlign="center"
                  color="red"
                  fontSize="md"
                >
                  Incorrect answer. Try again!
                </Text>
              )}
            </Box>
          </Flex>
        </Box>
      </Fade>
    </Portal>
  );
};

export default Captcha;
