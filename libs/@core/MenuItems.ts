import { Theme } from "@mui/material";

const MenuItem: Theme["components"] = {
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: "#fff !important",
        "&:hover": {
          backgroundColor: `${theme.palette.primary.main}20 !important`,
          color: theme.palette.primary.main,
          borderRadius: theme.shape.borderRadius,
        },
      }),
    },
  },
  MuiBottomNavigationAction: {
    styleOverrides: {
      root: {
        maxWidth: "40px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      paper: ({ theme }) => ({
        boxShadow: `0px 4px 20px ${theme.palette.secondary.main}20`,
        borderRadius: theme.shape.borderRadius,
      }),
      option: ({ theme }) => ({
        backgroundColor: "#fff !important",
        transition: theme.transitions.create("background-color", {
          duration: theme.transitions.duration.short,
        }),
        "&:hover": {
          backgroundColor: `${theme.palette.primary.main}20 !important`,
          color: theme.palette.primary.main,
          borderRadius: theme.shape.borderRadius,
        },
        "&[aria-selected='true']": {
          backgroundColor: `${theme.palette.primary.main}30 !important`,
        },
      }),
    },
  },
};

export default MenuItem;
