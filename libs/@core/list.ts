import { Theme } from "@mui/material";

const list: Theme["components"] = {
  MuiListItemButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        display: "flex",
        alignItems: "center",
        "&.Mui-selected": {
          backgroundColor: `${theme.palette.primary.main}30`,
          color: theme.palette.primary.main,
          borderRadius: 4,
        },
        height: 36,
      }),
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: ({ theme }) => ({
        minWidth: 28,
        marginRight: 8,
        color: "inherit",
        ".Mui-selected &": {
          color: theme.palette.primary.main,
        },
        ".MuiListItemButton-root:hover &": {
          color: theme.palette.primary.main,
        },
      }),
    },
  },
  MuiListItemText: {
    styleOverrides: {
      primary: ({ theme }) => ({
        fontSize: theme.typography.body1.fontSize,
        fontWeight: 500,
      }),
    },
  },
};

export default list;
