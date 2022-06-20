import React from "react"

import { Box, Container } from "@mui/material"

const Base = ({ children, ...props }: any) => (
  <Container
    sx={{
      height: "100vh",
      width: "100vw"
    }}
    disableGutters
  >
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      height="100%"
      width="100%"
      {...props}
    >
      {children}
    </Box>
  </Container>
);

export default Base;
