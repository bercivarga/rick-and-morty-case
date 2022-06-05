import { ApolloError } from "@apollo/client";
import { Text, Flex, Divider } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { FC } from "react";
import NextLink from "next/link";
import ErrorCard from "../components/ErrorCard";
import PathLayout from "../components/PathLayout";
import client from "../lib/client";
import { LocationModel, GET_ALL_LOCATIONS } from "../queries/locations";

const Locations: FC<{
  error: ApolloError | null;
  locations: LocationModel[];
}> = ({ error, locations }) => {
  if (error) {
    return <ErrorCard errorMessage={error.message} />;
  }

  return (
    <PathLayout title="Locations">
      <Flex h="full" flexWrap="wrap" gap={4}>
        {locations.map((location) => (
          <NextLink
            key={location.id}
            href={{
              pathname: "/locations/[id]",
              query: { id: location.id },
            }}
            passHref
          >
            <Flex
              color="black"
              bg="rnmBlue.100"
              textAlign="left"
              h="min-content"
              flexDir="column"
              p={6}
              textTransform="capitalize"
              borderRadius={4}
            >
              <Text fontSize="xl" fontWeight="bold">
                {location.name}
              </Text>
              <Divider mt={2} />
              <Text marginTop={4}>
                📍{" "}
                {location.dimension === "unknown"
                  ? "Unknown location"
                  : `Located in ${location.dimension}`}
              </Text>
              <Text mt={2}>🪐 Type of {location.type}</Text>
              <Text mt={2}>👶 Residents: {location.residents.length}</Text>
            </Flex>
          </NextLink>
        ))}
      </Flex>
    </PathLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await client.query({
    query: GET_ALL_LOCATIONS,
  });

  return {
    props: {
      error: res.error ?? null,
      locations: res.data.locations.results,
    },
  };
};

export default Locations;
