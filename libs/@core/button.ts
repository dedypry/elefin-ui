/* eslint-disable @typescript-eslint/no-explicit-any */
import { Theme } from "@mui/material";

const button: Theme["components"] = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: false,
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme, ownerState }) => {
        const buttonColor =
          ownerState.color === "secondary"
            ? theme.palette.secondary.main
            : ownerState.color === "primary"
            ? theme.palette.primary.main
            : ownerState.color === "error"
            ? theme.palette.error.main
            : ownerState.color === "success"
            ? theme.palette.success.main
            : ownerState.color === "warning"
            ? theme.palette.warning.main
            : ownerState.color === "info"
            ? theme.palette.info.main
            : theme.palette.grey[500];

        return {
          "&.Mui-disabled": {
            ...(ownerState.variant === "contained" && {
              backgroundColor: buttonColor,
              color: "#fff",
              opacity: 0.5,
            }),
            ...(ownerState.variant === "outlined" && {
              borderColor: theme.palette.divider,
              color: `${buttonColor}90`,
            }),
            ...(ownerState.variant === "text" && {
              color: `${buttonColor}80`,
            }),
            ...(ownerState.variant === "tonal" && {
              backgroundColor: theme.palette.action.disabledBackground,
              color: theme.palette.action.disabled,
            }),
          },
          "& .MuiLoadingButton-loadingIndicator": {
            color: "white",
          },
          transform: "scale(1.001)",
          transition: theme.transitions.create("all", {
            duration: theme.transitions.duration.short,
          }),
          "&:not(.Mui-disabled):active": {
            transform: "scale(0.98)",
          },
          ...(ownerState.variant != "text" && {
            boxShadow: `0px 4px 12px ${buttonColor}33`,
            "&:hover": {
              boxShadow: `0px 6px 12px ${buttonColor}66`,
            },
          }),
          ...(ownerState.size === "small" && {
            height: "30px",
            fontSize: 12,
          }),
          ...(ownerState.size === "large" && {
            height: "40px",
          }),
          ...(ownerState.size === "medium" && {
            height: "36px",
            fontSize: 14,
          }),
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "inherit" && {
              color: theme.palette.divider,
              borderColor: theme.palette.divider,
              "&:hover": {
                backgroundColor: `${theme.palette.background.default}0A`,
              },
            }),
        };
      },
    },
    variants: [
      {
        props: { variant: "tonal" },
        style: ({ theme, ownerState }: any) => {
          const buttonColor =
            ownerState.color === "secondary"
              ? theme.palette.secondary.main
              : ownerState.color === "primary"
              ? theme.palette.primary.main
              : ownerState.color === "success"
              ? theme.palette.success.main
              : ownerState.color === "warning"
              ? theme.palette.warning.main
              : ownerState.color === "error"
              ? theme.palette.error.main
              : ownerState.color === "info"
              ? theme.palette.info.main
              : theme.palette.grey[500];

          return {
            backgroundColor: `${buttonColor}33`,
            color: buttonColor,
            boxShadow: `0px 4px 8px ${buttonColor}20`,
            "&:hover": {
              backgroundColor: `${buttonColor}66`,
              boxShadow: `0px 6px 12px ${buttonColor}33`,
            },
            "&.Mui-disabled": {
              backgroundColor: `${buttonColor}20`,
              color: `${buttonColor}80`,
            },
          };
        },
      },
      {
        props: { variant: "glow" },
        style: ({ theme, ownerState }:any) => {
          const buttonColor =
            ownerState.color === "secondary"
              ? theme.palette.secondary.main
              : ownerState.color === "primary"
              ? theme.palette.primary.main
              : ownerState.color === "success"
              ? theme.palette.success.main
              : ownerState.color === "warning"
              ? theme.palette.warning.main
              : ownerState.color === "error"
              ? theme.palette.error.main
              : ownerState.color === "info"
              ? theme.palette.info.main
              : theme.palette.grey[500];

          return {
            backgroundColor: `${buttonColor}`,
            color: 'white',
            boxShadow: `0px 6px 16px ${buttonColor}70`,
            "&:hover": {
              backgroundColor: `${buttonColor}66`,
              boxShadow: `0px 6px 12px ${buttonColor}33`,
            },
            "&.Mui-disabled": {
              backgroundColor: `${buttonColor}20`,
              color: `${buttonColor}80`,
            },
          };
        },
      },
    ],
  },
};

export default button;
