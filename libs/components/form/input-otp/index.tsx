import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  numInputs: number;
  onChange?: (otp: string) => void;
  error?:boolean
  helperText?: string
}

export const InputOtp = ({ numInputs, onChange, error, helperText }: Props) => {
  const [otpValues, setOtpValues] = useState<string[]>(
    Array(numInputs).fill("")
  );

  const handleInputChange = (value: string, index: number) => {
    if (!/^[0-9a-zA-Z]?$/.test(value)) return;

    const newOtpValues = [...otpValues];

    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (onChange) onChange(newOtpValues.join(""));

    if (value && index < numInputs - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);

      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace") {
      const newOtpValues = [...otpValues];

      newOtpValues[index] = "";
      setOtpValues(newOtpValues);

      if (onChange) onChange(newOtpValues.join(""));

      if (index > 0) {
        const prevInput = document.getElementById(`otp-input-${index - 1}`);

        prevInput?.focus();
      }
    }
  };

  return (
    <>
      <Stack flexDirection="row" justifyContent="space-between">
        {[...Array(numInputs)].map((_, index) => (
          <TextField
            key={index}
            autoComplete="off"
            id={`otp-input-${index}`}
            inputProps={{
              maxLength: 1,
            }}
            {...(error && {
              error: true,
            })}
            sx={{
              width: 40,
              "& .MuiInputBase-root": {
                height: 40,
                p:0
              },
              "& .MuiInputBase-input": {
                height: "100%",
                textAlign: "center",
                fontSize: 15,
              },
            }}
            value={otpValues[index]}
            onChange={(e) => handleInputChange(e.target.value, index)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              handleKeyDown(e, index)
            }
          />
        ))}
      </Stack>
      {error && <Typography color="error">{helperText}</Typography>}
    </>
  );
};
