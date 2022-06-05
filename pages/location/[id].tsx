import { ApolloError } from "@apollo/client";
import {} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { FC } from "react";
import CharacterGrid from "../../components/CharacterGrid";
import ErrorCard from "../../components/ErrorCard";
import PathLayout from "../../components/PathLayout";
import client from "../../lib/client";
import { GET_LOCATION } from "../../queries/location";
import { LocationModel } from "../../queries/locations";

const Location: FC<{ error: ApolloError | null; location: LocationModel }> = ({
  error,
  location,
}) => {
  if (error) {
    return <ErrorCard errorMessage={error.message} />;
  }

  return (
    <PathLayout title={`${location.name}'s residents`}>
      {" "}
      <CharacterGrid characters={location.residents} />
    </PathLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await client.query({
    query: GET_LOCATION,
    variables: { id: query.id },
  });

  return {
    props: {
      error: res.error?.message ?? null,
      location: res.data.location,
    },
  };
};

export default Location;
