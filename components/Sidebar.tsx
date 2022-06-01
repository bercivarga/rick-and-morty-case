import {
  Box,
  List,
  ListItem,
  LinkBox,
  LinkOverlay,
  ListIcon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MdHomeFilled, MdPerson, MdHourglassBottom } from "react-icons/md";

const menuItems = [
  {
    name: "Home",
    icon: MdHomeFilled,
    path: "/",
  },
  {
    name: "Characters",
    icon: MdPerson,
    path: "/characters",
  },
  {
    name: "Plumbus!",
    icon: MdHourglassBottom,
    path: "/plumbus",
  },
];

const Sidebar = () => {
  return (
    <Box w="250px" h="full" position="absolute" bg="rnmBlue.300">
      <List>
        {menuItems.map((menuItem) => (
          <ListItem
            paddingX={2}
            fontSize="larger"
            _hover={{ bg: "rnmBlue.800" }}
          >
            <LinkBox>
              <NextLink href={menuItem.path} passHref>
                <LinkOverlay>
                  <ListIcon as={menuItem.icon} marginRight={5} />
                  {menuItem.name}
                </LinkOverlay>
              </NextLink>
            </LinkBox>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
