// libs/theme/provider.tsx
import React from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  CssBaseline,
  GlobalStyles,
} from "@mui/material";
import colorSchemes from "./colorSchemes";
import { SidebarProvider } from "../providers/SidebarProvider";
import typography from "./typography";
import components from "../@core";
import '../assets/global.css'

interface ITheme {
  fontFamily?: string;
}

const defaultTheme = ({ fontFamily }: ITheme) =>
  createTheme({
    spacing: 8,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1400,
      },
    },
    components: components(),
    typography: typography(fontFamily || 'poppins'),
    palette: colorSchemes(),
  });

export interface ElefinThemeProviderProps extends ITheme {
  children: React.ReactNode;
  theme?: ReturnType<typeof createTheme>;
}

export const ElefinThemeProvider: React.FC<ElefinThemeProviderProps> = ({
  children,
  theme,
  fontFamily,
}) => {
  return (
    <MUIThemeProvider
      theme={
        theme ??
        defaultTheme({
          fontFamily,
        })
      }
    >
      <CssBaseline />
      <GlobalStyles
        styles={{
          "@keyframes mui-badge-ripple": {
            "0%": {
              transform: "scale(0.8)",
              opacity: 1,
            },
            "100%": {
              transform: "scale(2.4)",
              opacity: 0,
            },
          },
        }}
      />
      <SidebarProvider>{children}</SidebarProvider>
    </MUIThemeProvider>
  );
};
