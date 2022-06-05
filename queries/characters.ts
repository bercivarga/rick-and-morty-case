import { gql, useQuery } from "@apollo/client";

interface CharacterModel {
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
  episode: string[];
  url: string;
  created: string;
}

interface ResponseModel {
  characters: {
    results: CharacterModel[];
  };
}

interface QueryVars {
  name?: string;
  status?: "alive" | "dead" | "unknown";
  species?: string;
  type?: string;
  gender?: "female" | "male" | "genderless" | "unknown";
}

export const GET_ALL_CHARACTERS = gql`
  query {
    characters {
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
        episode {
          name
          episode
        }
      }
    }
  }
`;

export default function useGetCharacters(filter: QueryVars) {
  return useQuery<ResponseModel, QueryVars>(GET_ALL_CHARACTERS, {
    variables: {
      ...filter,
    },
  });
}
