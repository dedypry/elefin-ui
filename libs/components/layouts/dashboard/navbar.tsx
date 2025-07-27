import { useSidebar } from "../../../main";
import {
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  Stack,
  AppBarProps,
  ToolbarProps,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactNode } from "react";
import { AvatarMenu, IAvatarMenu } from "./avatar-menu";

export interface NavProps {
  appBarProps?: AppBarProps;
  toolbarProps?: ToolbarProps;
  brandTitle?: string;
  buttonAction?: ReactNode;
  showUserProfileMenu?: boolean;
  avatarMenu?: IAvatarMenu;
}
export default function Navbar({
  appBarProps,
  toolbarProps,
  brandTitle,
  buttonAction,
  showUserProfileMenu = true,
  avatarMenu,
}: NavProps) {
  const { setOpen, isOpen } = useSidebar();

  return (
    <AppBar
      position="sticky"
      variant="elevation"
      color="inherit"
      component="nav"
      sx={{
        top: 3,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ...appBarProps,
      }}
    >
      <Toolbar variant="dense" {...toolbarProps}>
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
          onClick={() => setOpen(!isOpen)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {brandTitle}
        </Typography>
        <Stack flexDirection="row" gap={2} alignItems="center">
          {buttonAction}
          {showUserProfileMenu && <AvatarMenu {...avatarMenu} />}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
