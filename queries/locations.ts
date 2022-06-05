import { gql } from "@apollo/client";
import { CharacterModel } from "./characters";

export interface LocationModel {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: CharacterModel[];
}

export const GET_ALL_LOCATIONS = gql`
  query GetALlLocations {
    locations {
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
