import { IColor } from "../../../main";
import {
  MenuItem,
  MenuItemProps,
  Select as MUISelect,
  SelectProps as MUISelectProps,
  Stack,
  SxProps,
  Typography,
  TypographyProps
} from "@mui/material";
import React from "react";

export type SelectProps = MUISelectProps & {
  label?: string;
  helperText?: string;
  helperTextProps?: TypographyProps;
  labelColor?: IColor;
  labelPlacement?: "inside" | "outside" | "outside-left";
  labelGap?: number;
  labelSize?: number;
  labelStyle?: SxProps;
};

export const Select: React.FC<SelectProps> = (props) => {
  const {
    label,
    labelColor,
    labelGap,
    labelSize,
    labelPlacement,
    labelStyle,
    helperText,
    helperTextProps,
    ...selectProps
  } = props;
  return (
    <Stack
      flexDirection={
        labelPlacement == "outside"
          ? "column"
          : labelPlacement == "outside-left"
          ? "row"
          : undefined
      }
      {...(labelPlacement === "outside-left" && {
        alignItems: "center",
      })}
      gap={
        labelGap || (labelPlacement === "outside-left" ? 2 : 0.2)
      }
    >
      {labelPlacement !== "inside" && (
        <Typography
          fontSize={labelSize ?? 12}
          color={labelColor ?? props.color ?? "secondary"}
          sx={labelStyle}
        >
          {label}
        </Typography>
      )}

      <MUISelect
        {...selectProps}
        label={labelPlacement === "inside" ? label : ""}
      />
      {helperText && (
        <Typography
          fontSize={12}
          color={props.error ? "error" : "secondary"}
          ml={0.5}
          {...helperTextProps}
        >
          {helperText}
        </Typography>
      )}
    </Stack>
  );
};

export const SelectOption: React.FC<MenuItemProps> = (props) => {
  return <MenuItem {...props} />;
};
