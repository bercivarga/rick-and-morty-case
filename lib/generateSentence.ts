interface SentenceModel {
  name: string;
  gender: string;
  species: string;
  planet: string;
}

const generateSentence = ({ name, gender, species, planet }: SentenceModel) => {
  return `Generate a backstory for a ${gender} gendered ${species} names ${name} from the planet ${planet}`;
};

export default generateSentence;
