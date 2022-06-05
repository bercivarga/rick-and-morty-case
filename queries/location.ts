import { gql } from "@apollo/client";

export const GET_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        status
        species
        type
        gender
        location {
          id
          name
        }
        origin {
          id
          name
        }
        image
        episodes: episode {
          id
          name
        }
      }
    }
  }
`;
