import React from "react"

import { Wc } from "@mui/icons-material"
import { IconButton } from "@mui/material"

const ToiletMarker = (props: any) => (
  <IconButton color="quaternary" {...props}>
    <Wc sx={{ fontSize: 32 }} />
  </IconButton>
);

export default ToiletMarker;
