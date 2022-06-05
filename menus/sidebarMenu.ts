import { MdHomeFilled, MdPerson, MdPersonAdd } from "react-icons/md";
import { IoMdPlanet } from "react-icons/io";

const sidebarMenuItems = [
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
    name: "Locations",
    icon: IoMdPlanet,
    path: "/locations",
  },
  {
    name: "Character builder",
    icon: MdPersonAdd,
    path: "/character-builder",
  },
];

export default sidebarMenuItems;
