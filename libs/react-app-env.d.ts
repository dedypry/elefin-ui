/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ButtonPropsVariantOverrides } from "@mui/material/Button";
import { BreakpointOverrides } from "@mui/material/styles/createBreakpoints";

/// <reference types="react-scripts" />

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    tonal: true;
    glow: true;
  }
}

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

declare module "@mui/material/styles" {
  interface Components {
    MuiTabScrollButton?: {
      styleOverrides?: {
        root?: {
          [key: string]: any;
        };
      };
    };
  }
}

declare module "@mui/material/Badge" {
  interface BadgePropsVariantOverrides {
    signal: true;
  }
}
