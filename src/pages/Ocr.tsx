import React from "react"

import { Box } from "@mui/material"

import { program } from "../assets/data"
import { ocr } from "../assets/img"
import { ProgramHeading, Text, TextBase } from "../components"

const { heading, schedule } = program.ocr;

const Ocr = () => (
  <TextBase>
    <ProgramHeading img={ocr} mb={1} />
    <Text variant="body1" textAlign="center" mb={2}>
      {heading}
    </Text>
    <Box display="flex" flexDirection="column">
      {schedule.map(({ time, name }, i) => (
        <Box pr={1} mb={3} display="flex" key={i}>
          <Text variant="h5" fontSize={24}>
            {time}
          </Text>
          <Text variant="h5" fontSize={24} ml={3}>
            {name}
          </Text>
        </Box>
      ))}
    </Box>
  </TextBase>
);

export default Ocr;
