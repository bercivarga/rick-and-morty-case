import {
  List,
  ListItem,
  LinkBox,
  LinkOverlay,
  Button,
  IconButton,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import sidebarMenuItems from "../menus/sidebarMenu";

const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const sidebarBg = useColorModeValue("gray.50", "gray.800");
  const buttonColor = useColorModeValue("gray.900", "gray.100");

  return (
    <Flex
      w="250px"
      px={6}
      py={10}
      h="full"
      position="absolute"
      bg={sidebarBg}
      justifyContent="space-between"
      flexDirection="column"
    >
      <Box>
        <Flex
          w="full"
          alignItems="center"
          justifyContent="flex-start"
          flexDir="row"
        >
          <Box marginRight={2}>
            <NextImage src="/rnm_portal.png" width={32} height={32} />
          </Box>
          <Text fontSize="large" fontWeight="bold">
            Rick and Morty DB
          </Text>
        </Flex>
        <List spacing={4} marginTop={6}>
          {sidebarMenuItems.map((menuItem) => (
            <ListItem
              key={menuItem.name}
              as={Button}
              leftIcon={<menuItem.icon />}
              fontSize="xl"
              variant="solid"
              colorScheme="gray"
              color={buttonColor}
              alignItems="center"
              display="flex"
              w="full"
            >
              <LinkBox w="full" textAlign="left" alignItems="center">
                <NextLink href={menuItem.path} passHref>
                  <LinkOverlay
                    textAlign="left"
                    w="full"
                    lineHeight="normal"
                    fontSize="md"
                  >
                    {menuItem.name}
                  </LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
      <Flex justifyContent="space-between" flexDir="row" alignItems="flex-end">
        <VStack spacing={1} color="gray.300" alignItems="flex-start">
          <Text as="span">by berci varga</Text>
          <Text as="span">for gracious</Text>
          <Text as="span">2022</Text>
        </VStack>
        <IconButton
          aria-label="color-theme"
          color={buttonColor}
          icon={colorMode === "light" ? <MdLightMode /> : <MdDarkMode />}
          onClick={() => toggleColorMode()}
        />
      </Flex>
    </Flex>
  );
};

export default Sidebar;
