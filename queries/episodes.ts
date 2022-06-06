import { gql, useQuery } from "@apollo/client";
import { EpisodeModel } from "./episode";

export const GET_ALL_EPISODES = gql`
  query GetAllEpisodes($page: Int) {
    episodes(page: $page) {
      info {
        pages
        prev
        next
      }
      results {
        id
        name
        air_date
        episode
        characters {
          id
        }
      }
    }
  }
`;

interface ResponseModel {
  episodes: {
    info: {
      pages: number;
      prev: number;
      next: number;
    };
    results: EpisodeModel[];
  };
}

interface QueryVars {
  page: number;
}

export const useGetEpisodes = (page: number = 1) => {
  return useQuery<ResponseModel, QueryVars>(GET_ALL_EPISODES, {
    variables: {
      page,
    },
  });
};
