import React from "react"

import { MedicalServices } from "@mui/icons-material"
import { IconButton } from "@mui/material"

const SjaMarker = (props: any) => (
  <IconButton color="quaternary" {...props}>
    <MedicalServices sx={{ fontSize: 30 }} />
  </IconButton>
);

export default SjaMarker;
