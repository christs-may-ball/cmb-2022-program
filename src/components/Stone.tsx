import React from "react"

import { Box } from "@mui/material"

import { stone } from "../assets/img"

const Stone = ({ children }: any) => (
  <Box
    height="100%"
    width="100%"
    maxHeight={600}
    py={5}
    px={{
      xs: 4,
      sm: 8
    }}
    boxSizing="border-box"
    sx={{
      backgroundImage: `url(${stone})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    }}
  >
    <Box overflow="scroll" height="100%">
      {children}
    </Box>
  </Box>
);

export default Stone;
