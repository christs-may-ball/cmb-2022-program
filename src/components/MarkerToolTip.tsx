import React from "react"

import { ClickAwayListener, IconButton, Tooltip, Zoom } from "@mui/material"

const MarkerToolTip = ({ children, label, ...props }: any) => {
  const [open, setOpen] = React.useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Tooltip
        PopperProps={{
          disablePortal: true,
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -15]
              }
            }
          ]
        }}
        onClose={() => setOpen(false)}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        TransitionComponent={Zoom}
        title={label}
        placement="top"
        arrow
      >
        <IconButton
          color="quaternary"
          {...props}
          onClick={() => setOpen(!open)}
        >
          {children}
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  );
};

export default MarkerToolTip;
