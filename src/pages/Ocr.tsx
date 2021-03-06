import React from "react"

import { Box } from "@mui/material"

import { program } from "../assets/data"
import { ocr } from "../assets/img"
import { ProgramHeading, Text, TextBase } from "../components"

const body = program.ocr;

const render = ({ name, description, time }: any) => {
  if (time) {
    return (
      <>
        <Box display="flex" textAlign="left">
          <Text variant="h5">{time}</Text>
          <Text variant="h5" ml={3}>
            {name}
          </Text>
        </Box>
        <Text variant="body2">{description}</Text>
      </>
    );
  } else {
    return <Text variant="h5">{name}</Text>;
  }
};

const Ocr = () => (
  <TextBase>
    <Box display="flex" flexDirection="column" height="100%">
      <ProgramHeading img={ocr} mb={3} maxWidth={200} />
      <Box
        flex={1}
        pb={6}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
      >
        {body.map((item, i) => (
          <Box pr={1} mb={5} key={i}>
            {render(item)}
          </Box>
        ))}
      </Box>
    </Box>
  </TextBase>
);

export default Ocr;
