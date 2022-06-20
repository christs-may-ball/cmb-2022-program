import React from "react"

import { Box } from "@mui/material"

import { textBackground } from "../assets/img"
import Stone from "./Stone"

const TextBase = ({ children }: any) => (
  <Box
    height="100%"
    width="100%"
    sx={{
      backgroundImage: `url(${textBackground})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    }}
  >
    <Box
      py={4}
      px={{
        xs: 2,
        sm: 4
      }}
      width="100%"
      height="100%"
      boxSizing="border-box"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stone>{children}</Stone>
    </Box>
  </Box>
);

export default TextBase;
