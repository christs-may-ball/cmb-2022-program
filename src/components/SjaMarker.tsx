import React from "react"

import { MedicalServices } from "@mui/icons-material"

import MarkerToolTip from "./MarkerToolTip"

const SjaMarker = (props: any) => (
  <MarkerToolTip label="St John Ambulence" {...props}>
    <MedicalServices sx={{ fontSize: 30 }} />
  </MarkerToolTip>
);

export default SjaMarker;
