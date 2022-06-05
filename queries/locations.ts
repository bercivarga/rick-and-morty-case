import { gql } from "@apollo/client";

export interface LocationModel {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: {
    name: string;
  }[];
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
          name
        }
      }
    }
  }
`;
