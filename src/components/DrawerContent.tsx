import React from "react"
import { Link } from "react-router-dom"

import { Newspaper, TheaterComedy } from "@mui/icons-material"
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material"

import { Event } from "../types/new"

const body = [
  {
    label: "President's Address",
    link: "/presidents-address",
    icon: <Newspaper />
  }
];

const DrawerContent = ({
  toggle
}: {
  toggle: (open: boolean) => (e: Event) => void;
}) => (
  <Box
    width="auto"
    role="presentation"
    onClick={toggle(false)}
    onKeyDown={toggle(false)}
    bgcolor="tertiary.main"
  >
    <List>
      {body.map(({ label, link, icon }, index) => (
        <ListItem key={label} disablePadding>
          <ListItemButton component={Link} to={link}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default DrawerContent;
