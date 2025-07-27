// MUI Imports

import { Theme } from "@mui/material";

const switchOverrides: Theme["components"] = {
  MuiSwitch: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        "&:has(.Mui-disabled)": {
          opacity: 0.45,
        },
        ...(ownerState.size !== "small"
          ? {
              width: 42,
              height: 26,
              padding: 0,
              "& .MuiSwitch-thumb": {
                boxSizing: "border-box",
                width: 22,
                height: 22,
              },
              "& .MuiSwitch-track": {
                borderRadius: 26 / 2,
                backgroundColor: "#E9E9EA",
                opacity: 1,
                transition: theme.transitions.create(["background-color"], {
                  duration: 500,
                }),
                ...theme.applyStyles("dark", {
                  backgroundColor: "#39393D",
                }),
              },
            }
          : {
              width: 38,
              height: 22,
              padding: 0,
              "& .MuiSwitch-thumb": {
                boxSizing: "border-box",
                width: 18,
                height: 18,
              },
              "& .MuiSwitch-track": {
                borderRadius: 26 / 2,
                backgroundColor: "#E9E9EA",
                opacity: 1,
                transition: theme.transitions.create(["background-color"], {
                  duration: 500,
                }),
                ...theme.applyStyles("dark", {
                  backgroundColor: "#39393D",
                }),
              },
            }),
      }),
      switchBase: ({ theme, ownerState }) => ({
        padding: 0,
        margin: ownerState.size !== 'small' ? 2: -2,
        transitionDuration: "300ms",
        "&.Mui-checked": {
          transform: "translateX(16px)",
          color: "#fff",
          "& + .MuiSwitch-track": {
            backgroundColor: ownerState.color!,
            opacity: 1,
            border: 0,
            ...theme.applyStyles("dark", {
              backgroundColor: ownerState.color!,
            }),
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.5,
          },
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
          color: ownerState.color!,
          border: "6px solid #fff",
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
          color: theme.palette.grey[100],
          ...theme.applyStyles("dark", {
            color: theme.palette.grey[600],
          }),
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.7,
          ...theme.applyStyles("dark", {
            opacity: 0.3,
          }),
        },
      }),
    },
  },
};

export default switchOverrides;
