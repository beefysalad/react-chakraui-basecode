import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const LandingPage = () => {
  const { id } = useParams();
  return (
    <Box>
      <Text>Landing Page {id}</Text>
    </Box>
  );
};
