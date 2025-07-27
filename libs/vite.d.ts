/// <reference types="vite/client" />
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    "2xl": true; // Custom breakpoint
    "3xl": true; // Custom breakpoint
  }
}