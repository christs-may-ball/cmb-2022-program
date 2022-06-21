import React from "react"

import { Checkroom } from "@mui/icons-material"

import MarkerToolTip from "./MarkerToolTip"

const CloakroomMarker = (props: any) => (
  <MarkerToolTip label="Cloakroom & Posters" {...props}>
    <Checkroom sx={{ fontSize: 34 }} />
  </MarkerToolTip>
);

export default CloakroomMarker;
