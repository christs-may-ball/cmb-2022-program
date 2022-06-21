import React from "react"
import { Link } from "react-router-dom"

import {
  Article,
  HealthAndSafety,
  LunchDining,
  Newspaper
} from "@mui/icons-material"
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
    label: "President's address",
    link: "/presidents-address",
    icon: <Newspaper />,
    target: "_self"
  },
  {
    label: "Health and safety",
    link: "/health-and-safety",
    icon: <HealthAndSafety />,
    target: "_self"
  },
  {
    label: "Food allergy details",
    link: process.env.PUBLIC_URL + "/allergen-charts.pdf",
    icon: <LunchDining />,
    target: "_blank"
  },
  {
    label: "Plain text programme",
    link: process.env.PUBLIC_URL + "/programme.pdf",
    icon: <Article />,
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
