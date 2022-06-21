import React from "react"

import { Wc } from "@mui/icons-material"

import MarkerToolTip from "./MarkerToolTip"

const ToiletMarker = ({ label, ...props }: any) => (
  <MarkerToolTip label={label} {...props}>
    <Wc sx={{ fontSize: 32 }} />
  </MarkerToolTip>
);

export default ToiletMarker;
