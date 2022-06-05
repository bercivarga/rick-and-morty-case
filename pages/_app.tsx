import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/client";
import theme from "../styles/theme";
import PageLayout from "../components/PageLayout";
import "reset-css";
import "../styles/fonts.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ApolloProvider>
    </ChakraProvider>
  );
};
export default MyApp;
