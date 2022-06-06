import { gql, useQuery } from "@apollo/client";
import { CharacterModel } from "./characters";

export interface LocationModel {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: CharacterModel[];
}

export const GET_ALL_LOCATIONS = gql`
  query GetAllLocations($page: Int) {
    locations(page: $page) {
      info {
        pages
        prev
        next
      }
      results {
        id
        name
        type
        dimension
        residents {
          id
        }
      }
    }
  }
`;

interface ResponseModel {
  locations: {
    info: {
      pages: number;
      prev: number;
      next: number;
    };
    results: LocationModel[];
  };
}

export const useGetLocations = (page: number = 1) => {
  return useQuery<ResponseModel, { page: number }>(GET_ALL_LOCATIONS, {
    variables: {
      page,
    },
  });
};
