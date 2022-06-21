import React from "react"

import { Box } from "@mui/material"

import { program } from "../assets/data"
import { formalHall } from "../assets/img"
import { ProgramHeading, Text, TextBase } from "../components"

const { body, subtitle } = program.formalHall;

const FormalHall = () => (
  <TextBase>
    <Box height="100%" display="flex" flexDirection="column" textAlign="center">
      <ProgramHeading img={formalHall} mb={1} />
      <Box
        pb={6}
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box px={2} mb={2}>
          <Text variant="h1" fontSize={96}>
            {body}
          </Text>
          <Text variant="subtitle1">{subtitle}</Text>
        </Box>
      </Box>
    </Box>
  </TextBase>
);

export default FormalHall;
