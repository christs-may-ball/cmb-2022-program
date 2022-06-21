import React from "react"

import { Typography } from "@mui/material"

const Text = (props: any) => (
  <Typography
    color="tertiary.main"
    fontWeight={600}
    fontStyle="italic"
    {...props}
  />
);

export default Text;
