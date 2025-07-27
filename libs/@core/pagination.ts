import { Theme } from "@mui/material";

const pagination: Theme["components"] = {
  MuiPaginationItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: "#ECEDEF",
        border: "none",
        transition: "all 0.2s ease",

        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.04)",
        },
        "&.Mui-selected": {
          backgroundColor: `${theme.palette.primary.main}50`,
          color: theme.palette.primary.main,
          border: "none",

          "&:hover": {
            backgroundColor: theme.palette.primary.main,
          },
        },
      }),
    },
  },
};

export default pagination;
