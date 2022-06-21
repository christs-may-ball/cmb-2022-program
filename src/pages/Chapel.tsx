import React from "react"

import { Box } from "@mui/material"

import { program } from "../assets/data"
import { chapel } from "../assets/img"
import { ProgramHeading, Text, TextBase } from "../components"

const { heading, schedule } = program.chapel;

const Chapel = () => (
  <TextBase>
    <ProgramHeading img={chapel} mb={1} />
    <Text variant="body1" textAlign="center" mb={4}>
      {heading}
    </Text>
    <Box display="flex" flexDirection="column">
      {schedule.map(({ time, name }, i) => (
        <Box pr={1} mb={3} display="flex" key={i}>
          <Text variant="h5">{time}</Text>
          <Text variant="h5" ml={4}>
            {name}
          </Text>
        </Box>
      ))}
    </Box>
  </TextBase>
);

export default Chapel;
