import { useEffect, useState } from "react";
import { SentenceModel } from "../lib/generateSentence";

const useGenerator = (sentence?: SentenceModel) => {
  const [responseData, setResponseData] = useState<string>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (!sentence) {
      return;
    }

    (async function generateData() {
      try {
        const res = await fetch(`${window.location.origin}/api/generator`, {
          method: "POST",
          body: JSON.stringify(sentence),
        });

        if (!res.ok) {
          throw new Error(
            `Request attempt failed with status code ${res.status}`
          );
        }

        const data = await res.json();
        setResponseData(data[0].text);
      } catch (e) {
        setError(e as Error);
      }
    })();
  }, [sentence]);

  return {
    data: responseData,
    error,
  };
};

export default useGenerator;
