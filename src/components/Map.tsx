import React from "react"
import { Link } from "react-router-dom"

import styled from "@emotion/styled"
import { Box } from "@mui/material"

import { map } from "../assets/img"
import MapMarker from "./MapMarker"
import SjaMarker from "./SjaMarker"
import ToiletMarker from "./ToiletMarker"

const AbsoluteMapMarker = styled(MapMarker)(({ theme }) => ({
  position: "absolute",
  transform: "translate(-50%, -100%)"
}));

const AbsoluteToiletMarker = styled(ToiletMarker)(({ theme }) => ({
  position: "absolute",
  transform: "translate(-50%, -100%)"
}));

const AbsoluteSjaMarker = styled(SjaMarker)(({ theme }) => ({
  position: "absolute",
  transform: "translate(-50%, -100%)"
}));

const mapMarkers = [
  { position: ["85%", "49.5%"], link: "/first-court" },
  { position: ["61%", "68%"], link: "/second-court" },
  { position: ["44%", "32%"], link: "/third-court" },
  { position: ["39%", "74%"], link: "/fellows-garden" },
  { position: ["29%", "24%"], link: "/carpark" },
  { position: ["92%", "79%"], link: "/portrait-room" },
  { position: ["21%", "71%"], link: "/mulberry-tree" },
  { position: ["34%", "33%"], link: "/lloyd-room" },
  { position: ["80%", "28%"], link: "/chapel" },
  { position: ["82%", "86%"], link: "/buttery" },
  { position: ["75%", "65%"], link: "/formal-hall" },
  { position: ["75%", "81%"], link: "/ocr" }
];

const toiletMarkers = [
  { position: ["85%", "75.5%"] },
  { position: ["18%", "18%"] },
  { position: ["15%", "45%"] }
];

const sjaMarker = { position: ["20%", "45%"] };

const Map = () => (
  <Box mx="auto" flex={1} minHeight={0} mr={2}>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="stretch"
      height="100%"
    >
      <Box position="relative" height="100%" style={{ aspectRatio: "12/17" }}>
        <Box position="absolute" width="100%" height="100%" zIndex={2}>
          {mapMarkers.map(({ position: [top, left], link }, i) => (
            <AbsoluteMapMarker
              sx={{ top: top, left: left }}
              component={Link}
              to={link}
              key={i}
            />
          ))}
          {toiletMarkers.map(({ position: [top, left] }, i) => (
            <AbsoluteToiletMarker sx={{ top: top, left: left }} key={i} />
          ))}
          <AbsoluteSjaMarker
            sx={{ top: sjaMarker.position[0], left: sjaMarker.position[1] }}
          />
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
