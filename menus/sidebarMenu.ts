import { MdHomeFilled, MdPerson, MdHourglassBottom } from "react-icons/md";

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
    icon: MdHourglassBottom,
    path: "/locations",
  },
  {
    name: "Dimensions",
    icon: MdHourglassBottom,
    path: "/dimensions",
  },
  {
    name: "Character builder",
    icon: MdHourglassBottom,
    path: "/character-builder",
  },
];

export default sidebarMenuItems;
