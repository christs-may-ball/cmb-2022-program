import React from "react"
import { Link } from "react-router-dom"

import { OpenInNew } from "@mui/icons-material"
import { Button } from "@mui/material"

const LinkButton = (props: any) => (
  <Button
    LinkComponent={Link}
    endIcon={<OpenInNew />}
    sx={{ textTransform: "none" }}
    {...props}
  ></Button>
);

export default LinkButton;
