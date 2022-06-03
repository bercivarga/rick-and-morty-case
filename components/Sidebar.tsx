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
} from "@chakra-ui/react";
import NextLink from "next/link";
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
      <List spacing={4}>
        {sidebarMenuItems.map((menuItem) => (
          <ListItem
            key={menuItem.name}
            as={Button}
            leftIcon={<menuItem.icon />}
            variant="solid"
            colorScheme="gray"
            color={buttonColor}
            alignItems="center"
            w="full"
          >
            <LinkBox w="full" textAlign="left" alignItems="center">
              <NextLink href={menuItem.path} passHref>
                <LinkOverlay textAlign="left" w="full">
                  {menuItem.name}
                </LinkOverlay>
              </NextLink>
            </LinkBox>
          </ListItem>
        ))}
      </List>
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
