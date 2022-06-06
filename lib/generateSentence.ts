export interface SentenceModel {
  name: string;
  species: string;
  planet: string;
}

const generateSentence = ({ name, species, planet }: SentenceModel) => {
  return `Generate a wacky backstory for a new Rick and Morty character who is a ${species} called ${name} from the planet ${planet}`;
};

export default generateSentence;
