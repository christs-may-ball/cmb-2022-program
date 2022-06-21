import React from "react"

import { Box } from "@mui/material"

import { program } from "../assets/data"
import { portraitRoom } from "../assets/img"
import { ProgramHeading, Text, TextBase } from "../components"

const { heading, body } = program.portraitRoom;

const PortraitRoom = () => (
  <TextBase>
    <Box height="100%" display="flex" flexDirection="column" textAlign="center">
      <ProgramHeading img={portraitRoom} mb={1} />
      <Box
        pb={6}
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        {heading.map((text, i) => (
          <Box px={2} mb={2} key={i}>
            <Text variant="h5">{text}</Text>
          </Box>
        ))}
        <Box px={2} mb={2}>
          <Text variant="h2">{body}</Text>
        </Box>
      </Box>
    </Box>
  </TextBase>
);

export default PortraitRoom;
