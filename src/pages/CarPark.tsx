import React from "react"

import { Box } from "@mui/material"

import { program } from "../assets/data"
import { carpark } from "../assets/img"
import { ProgramHeading, Text, TextBase } from "../components"

const body = program.carpark;

const CarPark = () => (
  <TextBase>
    <Box display="flex" flexDirection="column" textAlign="center" height="100%">
      <ProgramHeading img={carpark} mb={2} />
      <Box
        pb={1}
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        {body.map(({ name, time }, i) => (
          <Box px={2} mb={3} key={i}>
            <Text variant="h5" whiteSpace="pre-wrap" fontSize={32}>
              {name}
            </Text>
            {time && <Text variant="body2">{time}</Text>}
          </Box>
        ))}
      </Box>
    </Box>
  </TextBase>
);

export default CarPark;
