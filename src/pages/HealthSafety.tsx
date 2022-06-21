import React from "react"

import { Box, Typography } from "@mui/material"

import { program } from "../assets/data"
import { TextBase } from "../components"

const HealthSafety = () => (
  <TextBase>
    <Box height="100%" display="flex" alignItems="center">
      <Typography variant="body1" color="tertiary.main" fontWeight={600}>
        {program.healthSafety}
      </Typography>
    </Box>
  </TextBase>
);

export default HealthSafety;
