import { NextApiRequest, NextApiResponse } from "next/types";
import generateSentence from "../../lib/generateSentence";
import openai from "../../lib/openai";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, species, planet } = JSON.parse(req.body);

  try {
    const response = await openai.createCompletion("text-davinci-002", {
      prompt: generateSentence({ name, species, planet }),
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    res.status(response.status);
    res.json(response.data.choices);
  } catch (error) {
    res.status(403);
    res.json({ error });
  }
};
