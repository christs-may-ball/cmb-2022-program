import React from "react"

import { Box } from "@mui/material"

import { program } from "../assets/data"
import { firstCourt } from "../assets/img"
import { ProgramHeading, Text, TextBase } from "../components"

const { heading, schedule } = program.firstCourt;

const FirstCourt = () => (
  <TextBase>
    <Box display="flex" flexDirection="column" height="100%">
      <ProgramHeading img={firstCourt} mb={1} />
      <Text variant="body1" textAlign="center" gutterBottom>
        {heading}
      </Text>
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        {schedule.map(({ time, name }, i) => (
          <Box pr={1} mb={3} display="flex" key={i}>
            <Text variant="h5">{time}</Text>
            <Text variant="h5" ml={3}>
              {name}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  </TextBase>
);

export default FirstCourt;
