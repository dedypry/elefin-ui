import type { Theme } from "@mui/material";

const TextField: Theme["components"] = {
  MuiTextField: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        "& .MuiInputBase-root": {
          height: 38,
          ...(ownerState.size === "small" && {
            height: 32,
          }),
        },
        "& .MuiInputLabel-root": {
          fontSize: 13,
          transform: "translate(14px, 12px) scale(1)", // tengah
          ...(ownerState.size === "small" && {
            fontSize: 12,
            transform: "translate(14px, 9px) scale(1)", // kecil lebih atas
          }),
        },
        "& .MuiInputLabel-shrink": {
          transform: "translate(14px, -7px) scale(0.75)", // posisi saat shrink
        },
      }),
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        "& .MuiOutlinedInput-input": {
          padding: "10px 14px", // padding internal
          ...(ownerState.size === "small" && {
            padding: "6px 12px",
          }),
        },
      }),
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: ({ theme, ownerState }) => {
        const colorKey = ownerState.color || "primary";
        const color =
          theme.palette[colorKey]?.main || theme.palette.primary.main;

        return {
          borderRadius: 4,
          backgroundColor: `${color}15`,
          "&:hover": {
            backgroundColor: `${color}20`,
          },
          "&.Mui-focused": {
            backgroundColor: `${color}15`,
          },
          "& .MuiFilledInput-input": {
            padding: "10px 14px",
            ...(ownerState.size === "small" && {
              padding: "6px 12px",
            }),
          },
          "&:before": {
            borderBottom: "none",
          },
          "&:after": {
            borderBottom: "none",
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
        };
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        "& .MuiInput-input": {
          padding: "10px 0px",
          ...(ownerState.size === "small" && {
            padding: "6px 0px",
          }),
        },
      }),
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        fontSize: ownerState.size === "small" ? 12 : 13,
        transform: "translate(0, 14px) scale(1)",
        top: ownerState.variant === "standard" ? 17 : undefined, // ⬅️ turunkan di standard
        ...(ownerState.size === "small" &&
          ownerState.variant === "standard" && {
            transform: "translate(0, 11px) scale(1)",
            top: 18,
          }),
      }),
      shrink: {
        transform: "translate(0, -1.5px) scale(0.75)",
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        height: 38,
        ...(ownerState.size === "small" && {
          height: 32,
        }),
      }),
      select: {
        display: "flex",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
      },
      icon: {
        top: "calc(50% - 12px)", // center the dropdown icon
      },
    },
  },
};

export default TextField;
