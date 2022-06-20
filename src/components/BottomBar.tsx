import React from "react"
import { Link } from "react-router-dom"

import { Favorite, LocationOn, MoreVert, Restore } from "@mui/icons-material"
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Drawer
} from "@mui/material"

import { Event } from "../types/new"
import DrawerContent from "./DrawerContent"

const BottomBar = () => {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: Event) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    )
      return;

    setOpen(open);
  };

  return (
    <>
      <Box width="100%" bgcolor="tertiary.main">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Favorites" icon={<Favorite />} />
          <BottomNavigationAction
            label="Map"
            icon={<LocationOn />}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            label="More"
            icon={<MoreVert />}
            onClick={toggleDrawer(true)}
          />
        </BottomNavigation>
      </Box>
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
        <DrawerContent toggle={toggleDrawer} />
      </Drawer>
    </>
  );
};
export default BottomBar;
