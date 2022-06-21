import React from "react"

import { Box } from "@mui/material"

import { program } from "../assets/data"
import { mulberryTree } from "../assets/img"
import { ProgramHeading, Text, TextBase } from "../components"

const { body, main } = program.mulberryTree;

const MulberryTree = () => (
  <TextBase>
    <ProgramHeading img={mulberryTree} mb={5} maxWidth={400} />
    <Box display="flex" flexDirection="column" textAlign="center">
      {body.map((text, i) => (
        <Box px={2} mb={3} key={i}>
          <Text variant="h6">{text}</Text>
        </Box>
      ))}
      <Text variant="h4">{main}</Text>
    </Box>
  </TextBase>
);

export default MulberryTree;
