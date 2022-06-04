import { FC, ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import usePageLayout from "../hooks/usePageLayout";

const PageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const {
    bgColor,
    mainContentBottom,
    mainContentHeight,
    mainContentTop,
    mainContentWidth,
  } = usePageLayout();

  return (
    <Box w="100vw" h="100vh">
      <Sidebar />
      <Box
        position="absolute"
        top={mainContentTop}
        bottom={mainContentBottom}
        right={0}
        h={mainContentHeight}
        w={mainContentWidth}
        bg={bgColor}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageLayout;
