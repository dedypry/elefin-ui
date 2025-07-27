import * as React from "react";
import Box from "@mui/material/Box";
import Navbar, { NavProps } from "./navbar";
import { useSidebar } from "../../../main";
import { Sidebar, SidebarProps } from "./sidebar";
import { CSSObject, styled, Theme } from "@mui/material";

interface Props {
  children: React.ReactNode;
  sidebarProps: SidebarProps;
  navbarProps?: NavProps;
}

interface MainContentProps {
  open?: boolean;
  width: number;
}

const MainContent = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "width",
})<MainContentProps>(
  ({ theme, open, width }: { theme: Theme } & MainContentProps): CSSObject => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? 0 : `-${width}px`,
  })
);

export function LayoutDashboard({
  children,
  sidebarProps,
  navbarProps,
}: Props) {
  const { isOpen, width } = useSidebar();

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar {...sidebarProps} />
      <MainContent
        open={isOpen}
        width={width!}
        sx={{ position: "relative", pt: 2 }}
      >
        <Navbar {...navbarProps} />
        <Box sx={{ mb: 2 }}>{children}</Box>
      </MainContent>
    </Box>
  );
}
