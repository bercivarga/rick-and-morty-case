import { useColorModeValue, useBreakpointValue } from "@chakra-ui/react";

export default function usePageLayout() {
  const bgColor = useColorModeValue("white", "gray.900");
  const mainContentWidth = useBreakpointValue({
    base: "full",
    md: "calc(100vw - 250px)",
  });
  const mainContentHeight = useBreakpointValue({
    base: "calc(100vh - 80px)",
    md: "full",
  });
  const mainContentTop = useBreakpointValue({
    base: undefined,
    md: 0,
  });
  const mainContentBottom = useBreakpointValue({
    base: 0,
    md: undefined,
  });

  return {
    bgColor,
    mainContentWidth,
    mainContentHeight,
    mainContentTop,
    mainContentBottom,
  };
}
