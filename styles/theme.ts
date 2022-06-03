import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import config from "./config";

const theme = extendTheme({
  colors,
  config,
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Nunito Sans', sans-serif`,
  },
});

export default theme;
