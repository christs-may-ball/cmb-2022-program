import React from "react"

import { Box } from "@mui/material"

import { program } from "../assets/data"
import { secondCourt } from "../assets/img"
import { ProgramHeading, Text, TextBase } from "../components"

const body = program.secondCourt;

const SecondCourt = () => (
  <TextBase>
    <ProgramHeading img={secondCourt} mb={3} maxWidth={400} />
    <Box display="flex" flexDirection="column" textAlign="center">
      {body.map(({ name, description, time }, i) => (
        <Box px={2} mb={1} key={i}>
          <Text variant="h5">{name}</Text>
          {description && <Text variant="body2">{description}</Text>}
          {time && (
            <Text variant="body2" fontSize={12}>
              {time}
            </Text>
          )}
        </Box>
      ))}
    </Box>
  </TextBase>
);

export default SecondCourt;
