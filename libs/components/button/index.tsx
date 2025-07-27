import React from "react";
import {
  Button as MButton,
  ButtonProps as MUIButtonProps,
  CircularProgress,
  SxProps,
} from "@mui/material";
import { IButtonVariant } from "../../main";

export interface ButtonProps extends MUIButtonProps {
  isLoading?: boolean;
  icon?: React.ReactNode;
  sx?: SxProps;
  variant?: IButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  icon,
  disabled,
  sx,
  variant,
  ...props
}) => {
  return (
    <MButton
      variant={variant || "contained"}
      startIcon={
        isLoading ? <CircularProgress color="inherit" size={16} /> : icon
      }
      disabled={isLoading || disabled}
      sx={{ textTransform: "none", ...sx }}
      {...props}
    >
      {children}
    </MButton>
  );
};
