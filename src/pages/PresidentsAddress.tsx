import React from "react"

import { Typography } from "@mui/material"
import { Box } from "@mui/system"

import { program } from "../assets/data"
import { president } from "../assets/img"
import { ProgramHeading, TextBase } from "../components"

const PresidentsAddress = () => (
  <TextBase>
    <ProgramHeading img={president} mb={3} />
    {program.address.map((text, i) => {
      if (text === "") {
        return <Box mb={2} key={i} />;
      } else {
        return (
          <Typography
            variant="body1"
            key={i}
            color="tertiary.main"
            fontWeight={600}
          >
            {text}
          </Typography>
        );
      }
    })}
  </TextBase>
);

export default PresidentsAddress;
