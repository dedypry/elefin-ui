import {
  Avatar,
  AvatarProps,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { ReactElement } from "react";

interface IMenu {
  title?: string;
  divider?: boolean;
  content?: ReactElement;
  icon?: ReactElement;
}

export interface IAvatarMenu {
  hideLogoutMenu?: boolean;
  onHover?: boolean;
  avatarProps?: AvatarProps;
  navbarMenu?: IMenu[];
  navbarMenuEvent?: (val: IMenu) => void;
}
export const AvatarMenu = ({ onHover = true, ...props }: IAvatarMenu) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      {...(onHover && {
        onMouseEnter: handleClick,
      })}
    >
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar sx={{ width: 32, height: 32 }} {...props.avatarProps} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        onMouseLeave={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: (theme) =>
                `drop-shadow(0px 2px 8px ${theme.palette.secondary.main}30)`,
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {props.navbarMenu?.map((item, i) => (
          <React.Fragment key={i}>
            <MenuItem>
              {item.content ? (
                item.content
              ) : (
                <>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {item.title}
                </>
              )}
            </MenuItem>
            {item.divider && <Divider />}
          </React.Fragment>
        ))}
      </Menu>
    </Box>
  );
};
