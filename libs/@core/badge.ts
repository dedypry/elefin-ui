import { Theme } from "@mui/material";

const badge: Theme["components"] = {
  MuiBadge: {
    styleOverrides: {
      badge: ({ theme, ownerState }) => {
        const paletteColor =
          ownerState.color && ownerState.color !== "default"
            ? ownerState.color
            : "primary";
        const color = theme.palette[paletteColor].main;

        if (ownerState.variant === "dot") {
          const anchor = ownerState.anchorOrigin || {
            vertical: "top",
            horizontal: "right",
          };

          // Posisi offset untuk ripple
          const position: Record<string, string | number> = {
            top: "0%",
            left: "0%",
          };

          if (anchor.vertical === "top") {
            position.top = 0;
          } else {
            position.top = "auto";
            position.bottom = 0;
          }

          if (anchor.horizontal === "left") {
            position.left = 0;
          } else {
            position.left = "auto";
            position.right = 0;
          }

          return {
            backgroundColor: color,
            color: color,
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            "&::after": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: `1px solid ${color}`,
              animation: "mui-badge-ripple 1.2s infinite ease-in-out",
              zIndex: -1,
              ...position,
            },
          };
        }

        return {};
      },
    },
  },
};

export default badge;
