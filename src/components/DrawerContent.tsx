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

import { allergenCharts } from "../assets/docs"
import { Event } from "../types/new"

const body = [
  {
    label: "President's Address",
    link: "/presidents-address",
    icon: <Newspaper />,
    target: "_self"
  },
  {
    label: "Food allergy details",
    link: allergenCharts,
    icon: <Newspaper />,
    target: "_blank"
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
      {body.map(({ label, link, icon, target }, index) => (
        <ListItem key={label} disablePadding>
          <ListItemButton component={Link} to={link} target={target}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default DrawerContent;
