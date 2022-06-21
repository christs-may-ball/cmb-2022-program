import React from "react"

import { LocationOn } from "@mui/icons-material"
import { IconButton } from "@mui/material"

const MapMarker = (props: any) => (
  <IconButton color="quaternary" {...props}>
    <LocationOn fontSize="large" />
  </IconButton>
);

export default MapMarker;
