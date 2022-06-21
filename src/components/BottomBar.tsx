import React from "react"
import { Link } from "react-router-dom"

import {
  LocalDining,
  LocationOn,
  MoreVert,
  TheaterComedy
} from "@mui/icons-material"
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Drawer
} from "@mui/material"

import { Event } from "../types/new"
import DrawerContent from "./DrawerContent"

const BottomBar = () => {
  const [value, setValue] = React.useState(1);
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
      <Box width="100%">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            backgroundColor: "tertiary.main"
          }}
        >
          <BottomNavigationAction
            label="Ents"
            icon={<TheaterComedy />}
            component={Link}
            to="/ents"
          />
          <BottomNavigationAction
            label="Map"
            icon={<LocationOn />}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            label="Food"
            icon={<LocalDining />}
            component={Link}
            to="/food-and-drinks"
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
