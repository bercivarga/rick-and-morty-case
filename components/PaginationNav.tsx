import { Box, Text, ButtonGroup, IconButton } from "@chakra-ui/react";
import { FC } from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

const PaginationNav: FC<{
  prevPage?: number;
  nextPage?: number;
  pagesCount?: number;
  handlePageSwitch?: (pageNr: number) => void;
}> = ({ prevPage, nextPage, pagesCount, handlePageSwitch }) => {
  return (
    <Box w="full" mt={6} display={(pagesCount ?? 0) > 1 ? "block" : "none"}>
      <ButtonGroup
        variant="solid"
        colorScheme="gray"
        w="full"
        flexDir="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <IconButton
          aria-label="previous"
          icon={<MdSkipPrevious />}
          onClick={() => handlePageSwitch?.call({}, prevPage ?? 1)}
        />
        <Text>
          Page {(nextPage ?? 1) - 1 ?? (prevPage ?? 1) + 1} of {pagesCount}
        </Text>
        <IconButton
          aria-label="previous"
          icon={<MdSkipNext />}
          onClick={() => handlePageSwitch?.call({}, nextPage ?? 1)}
        />
      </ButtonGroup>
    </Box>
  );
};

PaginationNav.defaultProps = {
  handlePageSwitch: () => undefined,
  nextPage: 0,
  prevPage: 0,
  pagesCount: 0,
};

export default PaginationNav;
