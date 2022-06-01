import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import PageLayout from "../components/PageLayout";
import "reset-css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ChakraProvider>
  );
};
export default MyApp;
