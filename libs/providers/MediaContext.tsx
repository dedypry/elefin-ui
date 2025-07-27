import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";


export function useMediaContext(breakpoint: Breakpoint) {
  const theme = useTheme();

  const media = useMediaQuery(theme.breakpoints.up(breakpoint));

  return media;
}
