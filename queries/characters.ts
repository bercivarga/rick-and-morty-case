import { gql, useQuery } from "@apollo/client";

interface EpisodeModel {
  name: string;
  episode: string;
}

export interface CharacterModel {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episodes: EpisodeModel[];
  url: string;
  created: string;
}

interface ResponseModel {
  characters: {
    info: {
      pages: number;
      prev: number;
      next: number;
    };
    results: CharacterModel[];
  };
}

export interface QueryVars {
  name?: string;
  status?: "alive" | "dead" | "unknown";
  species?: string;
  type?: string;
  gender?: "female" | "male" | "genderless" | "unknown";
  page?: number;
}

export const GET_ALL_CHARACTERS = gql`
  query Get_Characters(
    $name: String
    $status: String
    $species: String
    $type: String
    $gender: String
    $page: Int
  ) {
    characters(
      page: $page
      filter: {
        name: $name
        status: $status
        species: $species
        type: $type
        gender: $gender
      }
    ) {
      info {
        pages
        prev
        next
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
        }
        location {
          id
          name
        }
        image
        episodes: episode {
          name
          episode
        }
      }
    }
  }
`;

export default function useGetCharacters(filter: QueryVars, page: number = 1) {
  return useQuery<ResponseModel, QueryVars>(GET_ALL_CHARACTERS, {
    variables: {
      ...filter,
      page,
    },
  });
}
