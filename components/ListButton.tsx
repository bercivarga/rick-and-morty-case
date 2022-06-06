import { FC } from "react";
import { Button, Divider, Text } from "@chakra-ui/react";

const ListButton: FC<{
  title: string;
  firstText: string;
  secondText: string;
  thirdText: string;
}> = ({ title, firstText, secondText, thirdText }) => {
  return (
    <Button
      variant="solid"
      colorScheme="gray"
      flexDir="column"
      gap={2}
      h="full"
      w="full"
      p={6}
      whiteSpace="normal"
    >
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <Divider marginY={2} />
      <Text>{firstText}</Text>
      <Text>{secondText}</Text>
      <Text>{thirdText}</Text>
    </Button>
  );
};

export default ListButton;
