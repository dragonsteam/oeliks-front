import { Box, Heading, Text } from "@chakra-ui/react";

const CoverLetter = () => {
  return (
    <Box w={{ base: "100%", lg: "70%" }} m="auto">
      <Heading textAlign="center" mt={30}>
        Welcome
      </Heading>
      <Text fontSize={20} as="kbd">
        Oeliks is a free advertising platform being developed by Dragons Team.
        you can advertise anything, more people like it more you will have
        views, so good luck on discovering and advertising!
      </Text>
      <br />
      <Text color="yellow.500" as="kbd" fontWeight="bold">
        Warning: The website is currently on development stage and there might
        be few weak spots. DO NOT SUBMIT SENSITIVE INFORMATION as they are
        likely easy to be stolen by hackers
      </Text>
    </Box>
  );
};

export default CoverLetter;
