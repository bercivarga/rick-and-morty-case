import { Box, Divider, Text } from "@chakra-ui/react";
import { FC } from "react";

const ErrorCard: FC<{ errorMessage: string }> = ({ errorMessage }) => {
  return (
    <Box p={6}>
      <Box color="white" bg="red.600" p={6}>
        <Text>Something went wrong while handling your request.</Text>
        <Text>Please try again later, or notify the maintainer.</Text>
        <Divider my={2} />
        <pre>{errorMessage}</pre>
      </Box>
    </Box>
  );
};

export default ErrorCard;
