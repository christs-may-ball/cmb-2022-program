import React from "react"
import { Link } from "react-router-dom"

import styled from "@emotion/styled"
import { Box } from "@mui/material"

import { map } from "../assets/img"
import CloakroomMarker from "./CloakroomMarker"
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

const AbsoluteCloakroomMarker = styled(CloakroomMarker)(({ theme }) => ({
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
  { position: ["85%", "75.5%"], label: "Library Bathrooms" },
  { position: ["18%", "18%"], label: "Z Bathrooms" },
  { position: ["15%", "45%"], label: "Yusuf Hamied Centre Bathrooms" }
];

const sjaMarker = { position: ["20%", "45%"] };

const cloakroomMarker = { position: ["94%", "68%"] };

const Map = () => (
  <Box mx="auto" flex={1} minHeight={0}>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="stretch"
      height="100%"
    >
      <Box
        position="relative"
        height="100%"
        style={{ aspectRatio: "12/17" }}
        mr={2}
      >
        <Box position="absolute" width="100%" height="100%" zIndex={2}>
          {mapMarkers.map(({ position: [top, left], link }, i) => (
            <AbsoluteMapMarker
              sx={{ top: top, left: left }}
              component={Link}
              to={link}
              key={i}
            />
          ))}
          {toiletMarkers.map(({ position: [top, left], label }, i) => (
            <AbsoluteToiletMarker
              sx={{ top: top, left: left }}
              key={i}
              label={label}
            />
          ))}
          <AbsoluteSjaMarker
            sx={{ top: sjaMarker.position[0], left: sjaMarker.position[1] }}
          />
          <AbsoluteCloakroomMarker
            sx={{
              top: cloakroomMarker.position[0],
              left: cloakroomMarker.position[1]
            }}
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
