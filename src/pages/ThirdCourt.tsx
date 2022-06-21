import React from "react"

import { Box } from "@mui/material"

import { program } from "../assets/data"
import { thirdCourt } from "../assets/img"
import { ProgramHeading, Text, TextBase } from "../components"

const { heading, schedule } = program.thirdCourt;

const ThirdCourt = () => (
  <TextBase>
    <ProgramHeading img={thirdCourt} mb={1} maxWidth={400} />
    <Text variant="h6" textAlign="center" mb={5}>
      {heading}
    </Text>
    <Box display="flex" flexDirection="column">
      {schedule.map(({ time, name }, i) => (
        <Box px={2} mb={5} display="flex" key={i}>
          <Text variant="h5">{time}</Text>
          <Text variant="h5" ml={3}>
            {name}
          </Text>
        </Box>
      ))}
    </Box>
  </TextBase>
);

export default ThirdCourt;
