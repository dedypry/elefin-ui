/* eslint-disable react-hooks/exhaustive-deps */
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
  Typography,
  alpha,
  Collapse,
  Box,
  useMediaQuery,
  TypographyProps,
  SxProps,
} from "@mui/material";

import { useSidebar } from "../../../providers";
import { INavigation } from "../../../interfaces";
import { ReactElement, useEffect, useState } from "react";
import { ExpandLess } from "@mui/icons-material";

export interface SidebarProps {
  navigation?: INavigation[];
  onRoute?: (val: string) => void;
  logo?: string | ReactElement;
  bgColor?: string;
  bgImage?: string;
  colorItem?: string;
  colorItemSelected?: string;
  colorTextItemSelected?: string;
  colorItemParent?: string;
  colorItemHover?: string;
  colorItemSelectedHover?: string;
  textItemColor?: string;
  textStyleHeader?: TypographyProps;
  listItemStyle?: SxProps;
  listItemIconStyle?: SxProps;
  listItemTextStyle?: TypographyProps;
}

export function Sidebar({
  navigation = [],
  onRoute,
  logo,
  ...props
}: SidebarProps) {
  const theme = useTheme();
  const { width, isOpen, setOpen, setWidth } = useSidebar();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  }));

  useEffect(() => {
    setWidth(isMobile ? 0 : 240);
    setOpen(!isMobile);
  }, [isMobile]);

  return (
    <Drawer
      sx={{
        width: width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: width,
          boxSizing: "border-box",
          border: "none",
          borderRadius: 0,
          boxShadow: (theme) =>
            `0px 0px 16px ${alpha(theme.palette.secondary.main, 0.5)}`,
          ...(props.bgColor
            ? {
                backgroundColor: props.bgColor,
              }
            : {
                backgroundImage: (theme) =>
                  `linear-gradient(255deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
              }),
        },
      }}
      variant={isMobile ? "temporary" : "persistent"}
      anchor="left"
      open={isOpen}
    >
      <DrawerHeader>
        {logo ? (
          typeof logo === "string" ? (
            <img src={logo} height={40} />
          ) : (
            logo
          )
        ) : (
          <Box />
        )}
        {/* <IconButton onClick={() => setOpen(false)}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon sx={{ color: "white" }} />
          ) : (
            <ChevronRightIcon sx={{ color: "white" }} />
          )}
        </IconButton> */}
      </DrawerHeader>
      <List
        sx={{
          px: 1,
        }}
      >
        {navigation.map((item, i) => {
          if (item.header) {
            return (
              <Typography
                key={i}
                color={props.colorItemParent || theme.palette.background.paper}
                fontSize={14}
                mb={0.5}
                mt={2}
                ml={1}
                {...props.textStyleHeader}
              >
                {item.header}
              </Typography>
            );
          } else {
            return (
              <SidebarItem key={i} {...item} onRoute={onRoute} {...props} />
            );
          }
        })}
      </List>
    </Drawer>
  );
}

type SidebarItemProps = INavigation & SidebarProps;

export const SidebarItem = ({
  title,
  href,
  icon,
  children,
  onRoute,
  ...props
}: SidebarItemProps) => {
  const [open, setOpen] = useState(false);
  const [isParentActive, setIsParentActive] = useState(false);
  const [urlActive, setUrlActive] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrlActive(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(children) && children.length > 0) {
      const find = children.find((e) => e.href === urlActive);
      setIsParentActive(!!find);
      if (find) {
        setOpen(true);
      }
    }
  }, [urlActive]);

  function handleHref() {
    if (Array.isArray(children) && children.length > 0) {
      setOpen(!open);
    } else if (href && onRoute) {
      onRoute(href);
    } else if (href) {
      window.location.href = href;
    }
  }

  return (
    <>
      <ListItem disablePadding sx={{ mt: 0.2 }}>
        <ListItemButton
          selected={href === urlActive}
          onClick={handleHref}
          sx={
            props.listItemStyle || {
              color: props.colorItem || "whitesmoke",
              ...(isParentActive && {
                backgroundColor: "rgba(249 245 245 / 0.55)", // 20% opacity
                color: (theme) =>
                  props.colorItemParent || theme.palette.primary.main,
                fontWeight: "bold",
                borderRadius: 1,
              }),
              "&.Mui-selected": (theme) => ({
                ...(props.colorItem
                  ? {
                      backgroundColor: props.colorItem,
                    }
                  : {
                      backgroundImage: `linear-gradient(to right, white, gainsboro)`,
                    }),
                color:
                  props.colorTextItemSelected || theme.palette.primary.main,
                borderRadius: 1,
                boxShadow: `0px 0px 6px ${alpha(
                  theme.palette.secondary.main,
                  0.5
                )}`,
              }),
              "&:hover": (theme) => ({
                backgroundColor: "rgba(249 245 245 / 0.68)", // 20% opacity
                color: props.colorItemHover || theme.palette.primary.main,
                borderRadius: 1,
              }),
              "&.Mui-selected:hover": (theme) => ({
                backgroundColor: "rgba(249 245 245 / 0.68)",
                color:
                  props.colorItemSelectedHover || theme.palette.primary.main,
                borderRadius: 1,
              }),
            }
          }
        >
          <ListItemIcon
            sx={
              props.listItemIconStyle || {
                color: "inherit",
                ...(isParentActive && {
                  color: (theme) => theme.palette.primary.main,
                }),
                ".Mui-selected &": (theme) => ({
                  color: theme.palette.primary.main,
                }),
                ".MuiListItemButton-root:hover &": (theme) => ({
                  color: theme.palette.primary.main,
                }),
              }
            }
          >
            {icon}
          </ListItemIcon>
          <ListItemText
            primary={title}
            slotProps={{
              primary: props.listItemTextStyle || {
                fontSize: (theme) => theme.typography.body1.fontSize,
                fontWeight: 500,
              },
            }}
          />
          {Array.isArray(children) && children.length > 0 && (
            <Box
              component={ExpandLess}
              sx={{
                transition: "transform 0.3s ease",
                transform: open ? "rotate(0deg)" : "rotate(180deg)",
              }}
            />
          )}
        </ListItemButton>
      </ListItem>
      {Array.isArray(children) && children.length > 0 && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List sx={{ p: 0.2, pl: 1 }}>
            {children.map((item, idx) => (
              <SidebarItem key={idx} onRoute={onRoute} {...item} {...props} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};
