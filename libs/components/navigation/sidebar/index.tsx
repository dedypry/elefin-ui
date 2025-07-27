import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  DrawerProps,
  IconButton,
} from "@mui/material";
import { Close, Inbox, Mail } from "@mui/icons-material";
import { IColor } from "../../../main";
import { ReactNode } from "react";
import { useSidebar } from "../../../main";

const menuItems = [
  { text: "Inbox", icon: <Inbox /> },
  { text: "Mail", icon: <Mail /> },
];

interface Props extends DrawerProps {
  width?: number;
  bgColor?: IColor;
  buttonClose?: ReactNode;
}

export function Sidebar({
  width = 240,
  bgColor,
  buttonClose,
  ...props
}: Props) {
  const {isOpen, setOpen, toggleOpen} = useSidebar()
  return (
    <Drawer
      open={isOpen}
      onClose={toggleOpen}
      variant="persistent"
      anchor="left"
      sx={{
        position: "relative",
        width: width,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: (theme) => ({
          width: width,
          boxSizing: "border-box",
          backgroundColor:
            bgColor && bgColor != "default"
              ? theme.palette[bgColor].main
              : undefined,
        }),
      }}
      {...props}
    >
      <Box
        sx={{
          position: "absolute",
          right: 5,
          top: 5,
          zIndex: 10,
        }}
      >
        <IconButton onClick={() => setOpen(false)} size="small">
          {buttonClose ?? (
            <Close
              style={{
                width: 20,
              }}
            />
          )}
        </IconButton>
      </Box>

      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
