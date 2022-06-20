import React from "react"
import { Link } from "react-router-dom"

import { Inbox, Mail, Newspaper } from "@mui/icons-material"
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material"

import { Event } from "../types/new"

const body = [{ label: "President's Address", link: "/presidents-address" }];

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
      {body.map(({ label, link }, index) => (
        <ListItem key={label} disablePadding>
          <ListItemButton component={Link} to={link}>
            <ListItemIcon>
              {index % 2 === 0 ? <Newspaper /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <Inbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default DrawerContent;
