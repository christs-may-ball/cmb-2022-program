import React from "react"

import { Box } from "@mui/material"

import { program } from "../assets/data"
import { lloydRoom } from "../assets/img"
import { ProgramHeading, Text, TextBase } from "../components"

const { body } = program.lloydRoom;

const LloydRoom = () => (
  <TextBase>
    <Box height="100%" display="flex" flexDirection="column" textAlign="center">
      <ProgramHeading img={lloydRoom} mb={1} />
      <Box
        pb={6}
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box px={2}>
          <Text variant="h1">{body}</Text>
        </Box>
      </Box>
    </Box>
  </TextBase>
);

export default LloydRoom;
