import { ApolloError } from "@apollo/client";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";
import CharacterGrid from "../../components/CharacterGrid";
import ErrorCard from "../../components/ErrorCard";
import PathLayout from "../../components/PathLayout";
import client from "../../lib/client";
import { EpisodeModel, GET_EPISODE } from "../../queries/episode";

const Episode: FC<{ error: ApolloError | null; episode: EpisodeModel }> = ({
  error,
  episode,
}) => {
  if (error) {
    return <ErrorCard errorMessage={error.message} />;
  }

  return (
    <PathLayout title={`${episode.name}'s cast`}>
      <Head>
        <title>{episode.name}&apos;s cast</title>
      </Head>
      <CharacterGrid characters={episode.characters} />
    </PathLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await client.query({
    query: GET_EPISODE,
    variables: { id: query.id },
  });

  return {
    props: {
      error: res.error?.message ?? null,
      episode: res.data.episode,
    },
  };
};

export default Episode;
