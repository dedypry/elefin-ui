/* eslint-disable @typescript-eslint/no-explicit-any */
import { IColor } from "../../../main";
import {
  Autocomplete as MUIAutocomplete,
  AutocompleteProps as MUIAutocompleteProps,
  TextFieldProps,
  TypographyProps,
  Stack,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";

export type AutoCompleteProps = {
  label?: string;
  helperText?: string;
  error?: boolean;
  labelColor?: IColor;
  labelPlacement?: "outside" | "outside-left";
  labelGap?: number;
  labelSize?: number;
  labelStyle?: SxProps;
  color?: string;
  inputProps?: TextFieldProps;
  helperTextProps?: TypographyProps;
  onValue?: (val: any) => void;
};

export const AutoComplete = <
  T = any,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false
>({
  label,
  labelGap,
  labelColor,
  labelPlacement,
  labelSize,
  labelStyle,
  color,
  helperText,
  error,
  onValue,
  renderInput,
  inputProps,
  helperTextProps,
  ...props
}: AutoCompleteProps &
  Omit<
    MUIAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    "renderInput"
  > & {
    renderInput?: MUIAutocompleteProps<
      T,
      Multiple,
      DisableClearable,
      FreeSolo
    >["renderInput"];
  }) => {
  return (
    <Stack
      flexDirection={
        labelPlacement === "outside"
          ? "column"
          : labelPlacement === "outside-left"
          ? "row"
          : undefined
      }
      {...(labelPlacement === "outside-left" && {
        alignItems: "center",
      })}
      gap={labelGap || (labelPlacement === "outside-left" ? 2 : 0.2)}
    >
      {label && (
        <Typography
          fontSize={labelSize ?? 12}
          color={labelColor ?? color ?? "secondary"}
          sx={labelStyle}
        >
          {label}
        </Typography>
      )}

      <MUIAutocomplete
        onChange={(_, val) => onValue!(val)}
        {...props}
        renderInput={
          renderInput ??
          ((params) => (
            <TextField
              {...params}
              error={error}
              sx={{
                "& .MuiInputBase-root": {
                  paddingTop: "1px",
                  paddingBottom: "4px",
                },
                "& .MuiInputBase-input": {
                  padding: 0,
                },
              }}
              {...inputProps}
            />
          ))
        }
      />
      {helperText && (
        <Typography
          fontSize={12}
          color={error ? "error" : "secondary"}
          ml={0.5}
          {...helperTextProps}
        >
          {helperText}
        </Typography>
      )}
    </Stack>
  );
};
