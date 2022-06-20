import React from "react"

import styled from "@emotion/styled"
import { Box } from "@mui/material"

import { map } from "../assets/img"
import MapMarker from "./MapMarker"

const AbsoluteMarker = styled(MapMarker)(({ theme }) => ({
  position: "absolute",
  transform: "translate(-50%, -100%)"
}));

const Map = () => (
  <Box mx="auto" flex={1} minHeight={0}>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="stretch"
      height="100%"
    >
      <Box position="relative" height="100%" style={{ aspectRatio: "12/17" }}>
        <Box position="absolute" width="100%" height="100%" zIndex={2}>
          <AbsoluteMarker sx={{ top: "85%", left: "49.5%" }} />
          <AbsoluteMarker sx={{ top: "61%", left: "68%" }} />
          <AbsoluteMarker sx={{ top: "43%", left: "32%" }} />
          <AbsoluteMarker sx={{ top: "35%", left: "78%" }} />
          <AbsoluteMarker sx={{ top: "29%", left: "20%" }} />
        </Box>
        <img
          style={{ height: "100%", width: "100%" }}
          src={map}
          alt="Stylised map of Christ's College"
        />
      </Box>
    </Box>
  </Box>
);

export default Map;
