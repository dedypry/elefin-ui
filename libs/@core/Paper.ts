import { alpha, Theme } from "@mui/material";

const paper: Theme["components"] = {
  MuiPaper: {
    styleOverrides: {
      root: ({ theme, ownerState }) => {
        if (ownerState.variant == "outlined") {
          return {
            backgroundImage: "none",
            border: `1px solid ${theme.palette.divider}`,
          };
        }

        if (typeof ownerState.elevation === "number") {
          return {
            boxShadow: `0px 0px ${ownerState.elevation + 5}px ${alpha(
              theme.palette.secondary.main,
              0.2
            )}`,
            borderRadius: 4,
          };
        }

        return {
          boxShadow: `0px 0px 16px ${alpha(theme.palette.secondary.main, 0.2)}`,
          borderRadius: 4,
        };
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        paddingBottom: 1,
      },
      title: ({ theme }) => ({
        fontWeight: 600,
        color: theme.palette.secondary.main,
        fontSize: 18,
      }),
    },
  },
};

export default paper;
