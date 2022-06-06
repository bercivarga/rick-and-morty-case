import { gql } from "@apollo/client";
import { CharacterModel } from "./characters";

export interface EpisodeModel {
  id: number;
  name: string;
  episode: string;
  air_date: string;
  characters: CharacterModel[];
}

export const GET_EPISODE = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      episode
      characters {
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
          id
          name
        }
      }
      air_date
    }
  }
`;
