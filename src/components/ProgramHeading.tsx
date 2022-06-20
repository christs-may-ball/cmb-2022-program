import React from "react"

import { Box } from "@mui/system"

const ProgramHeading = ({ img, alt, maxWidth = 300, ...props }: any) => (
  <Box width="100%" maxWidth={maxWidth} mx="auto" {...props}>
    <img style={{ width: "100%", height: "auto" }} src={img} alt={alt} />
  </Box>
);

export default ProgramHeading;
