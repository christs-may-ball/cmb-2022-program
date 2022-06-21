import React from "react"

import { Box } from "@mui/material"

import { program } from "../assets/data"
import { fellowsGrarden } from "../assets/img"
import { ProgramHeading, Text, TextBase } from "../components"

const { headings, schedule } = program.fellowsGarden;

const FellowsGarden = () => (
  <TextBase>
    <ProgramHeading img={fellowsGrarden} mb={1} />
    <Box mb={3}>
      {headings.map((text, i) => (
        <Text variant="body2" textAlign="center" key={i}>
          {text}
        </Text>
      ))}
    </Box>
    <Box display="flex" flexDirection="column">
      {schedule.map(({ time, name }, i) => (
        <Box pr={1} mb={1} display="flex" justifyContent="start" key={i}>
          <Text variant="h6">{time}</Text>
          <Text variant="h6" ml={4}>
            {name}
          </Text>
        </Box>
      ))}
    </Box>
  </TextBase>
);

export default FellowsGarden;
