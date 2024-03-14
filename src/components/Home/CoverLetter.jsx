import { Box, Heading, Text } from "@chakra-ui/react";

const CoverLetter = () => {
  return (
    <Box>
      <Heading textAlign="center">Welcome</Heading>
      <Text fontSize={20} as="kbd">
        Oeliks is a free advertising platform being developed by Dragons Team.
        you can advertise anything, more people like it more you will have
        views, so good luck on discovering and advertising!
      </Text>
      <br />
      <Text color="yellow.500" as="kbd" fontWeight="bold">
        Warning: The website is currently on development stage and it is using
        http insecure protocol. DO NOT SUBMIT SENSITIVE INFORMATION as they are
        likely easy to be stolen by hackers
      </Text>
    </Box>
  );
};

export default CoverLetter;
