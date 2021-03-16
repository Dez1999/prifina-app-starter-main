import React from "react";

import { Text, Flex } from "@blend-ui/core";

import { extendTheme, ThemeProvider, Progress, Stack } from "@chakra-ui/react";

const styles = {
  transform: `rotate(${270}deg)`,
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function ProgressContainer({ text }) {
  return (
    <ThemeProvider theme={theme}>
      <Flex flexDirection="column">
        <div style={styles}>
          <Stack spacing="10px">
            <Progress
              colorScheme="green"
              size="sm"
              value={0}
              width={100}
              height="5px"
              borderRadius={100}
            />
            <Progress
              colorScheme="green"
              size="sm"
              value={0}
              width={132}
              height="5px"
              borderRadius={100}
            />
            <Progress
              colorScheme="green"
              size="sm"
              value={0}
              width={147}
              height="5px"
              borderRadius={100}
            />
            <Progress
              colorScheme="green"
              size="sm"
              value={0}
              width={109}
              height="5px"
              borderRadius={100}
            />
            <Progress
              colorScheme="blue"
              size="sm"
              value={100}
              width={132}
              height="5px"
              borderRadius={100}
            />
            <Progress
              colorScheme="red"
              size="sm"
              value={100}
              width={147}
              height="5px"
              borderRadius={100}
            />
            <Progress
              colorScheme="cyan"
              size="sm"
              value={100}
              width={109}
              height="5px"
              borderRadius={100}
            />
          </Stack>
        </div>
        <div style={{ marginTop: 42, marginLeft: 53 }}>
          <Text color="#95A4B7" fontSize={15}>
            {text}
          </Text>
        </div>
      </Flex>
    </ThemeProvider>
  );
}

export default ProgressContainer;

{
  /* <div style={styles}>
        <div style={{ padding: 5, width: 100 }}>
          <LinearProgress variant="determinate" value={0} />
        </div>
        <div style={{ padding: 5, width: 132 }}>
          <LinearProgress variant="determinate" value={0} />
        </div>
        <div style={{ padding: 5, width: 147 }}>
          <LinearProgress variant="determinate" value={0} />
        </div>
        <div style={{ padding: 5, width: 109 }}>
          <LinearProgress variant="determinate" value={0} />
        </div>
        <div style={{ padding: 5, width: 132 }}>
          <LinearProgress variant="determinate" value={100} />
        </div>
        <div style={{ padding: 5, width: 147 }}>
          <LinearProgress variant="determinate" value={100} color="secondary" />
        </div>
        <div style={{ padding: 5, width: 109 }}>
          <LinearProgress variant="determinate" value={100} color="primary" />
        </div>
      </div> */
}
