import { IColor } from "../../../main";
import {
  TextField as MUITextField,
  TextFieldProps as MUITextFieldProps,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import React from "react";

export type TextFieldProps = MUITextFieldProps & {
  label?: string;
  labelColor?: IColor;
  labelPlacement?: "inside" | "outside" | "outside-left";
  labelGap?: number;
  labelSize?: number;
  labelStyle?: SxProps;
};

export const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <Stack
      flexDirection={
        props.labelPlacement == "outside"
          ? "column"
          : props.labelPlacement == "outside-left"
          ? "row"
          : undefined
      }
      {...(props.labelPlacement === "outside-left" && {
        alignItems: "center",
      })}
      gap={
        props.labelGap || (props.labelPlacement === "outside-left" ? 2 : 0.2)
      }
    >
      {props.labelPlacement !== "inside" && (
        <Typography
          fontSize={props.labelSize ?? 12}
          color={props.labelColor ?? props.color ?? "secondary"}
          sx={props.labelStyle}
        >
          {props.label}
        </Typography>
      )}

      <MUITextField
        {...props}
        label={props.labelPlacement === "inside" ? props.label : ""}
        {...(props.error && {
          color: "error",
        })}
        helperText=""
      />
      {props.helperText && (
        <Typography
          fontSize={12}
          color={props.error ? "error" : "secondary"}
          ml={0.5}
        >
          {props.helperText}
        </Typography>
      )}
    </Stack>
  );
};
