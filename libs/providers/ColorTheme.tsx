import { useTheme } from "@mui/material";

export function useColor() {
  const theme = useTheme();

  return {
    primary: theme.palette.primary.main,
    success: theme.palette.success.main,
    secondary: theme.palette.secondary.main,
    error: theme.palette.error.main,
    warning: theme.palette.warning.main,
    info: theme.palette.info.main,
  };
}
