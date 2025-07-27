import type { Theme } from "@mui/material";

const tabs: Theme["components"] = {
  MuiTabs: {
    styleOverrides: {
      root: () => {
        return {
          "& .MuiTabs-indicator": {
            display: "none",
          },
          "& .MuiTabs-root": {
            minHeight: 33,
            height: 33,
          },
          "& .MuiTab-root": {
            height: 33,
            minHeight: 33,
            fontSize: 14,
          },
          "&.MuiTabScrollButton-start": {
            left: 0, // Position left
          },
          "&.MuiTabScrollButton-end": {
            right: 0, // Position right
          },
        };
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        minHeight: 33,
        "&.Mui-selected": {
          backgroundColor: theme.palette.primary.main,
          borderRadius: 5,
          color: theme.palette.primary.contrastText,
        },
      }),
    },
  },
};

export default tabs;
