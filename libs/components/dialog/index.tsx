/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  ButtonProps,
  DialogProps,
  Dialog as MUIDialog,
  styled,
} from "@mui/material";
import { IconSquareXFilled } from "@tabler/icons-react";
import { ReactNode } from "react";
interface IDialog extends DialogProps {
  showCloseIcon?: boolean;
  children?: ReactNode;
}

const DialogCloseButton = styled(Button)<ButtonProps>({
  top: 0,
  right: 0,
  color: "var(--mui-palette-text-disabled)",
  position: "absolute",
  boxShadow: "var(--mui-customShadows-xs)",
  transform: "translate(9px, -10px)",
  borderRadius: 5,
  backgroundColor: "rgb(77 76 76)",
  transition: "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out",
  blockSize: 30,
  inlineSize: 30,
  minInlineSize: 0,
  padding: 0,
  "&:hover, &:active": {
    transform: "translate(7px, -5px) !important",
  },
  "& i, & svg": {
    fontSize: "1.25rem",
  },
});

export const Dialog = ({ showCloseIcon = true, children, ...props }: IDialog) => {
  return (
    <MUIDialog
      fullWidth
      maxWidth="md"
      scroll="body"
      sx={{ "& .MuiDialog-paper": { overflow: "visible" } }}
      {...props}
    >
      {showCloseIcon && (
        <DialogCloseButton
          disableRipple
          onClick={(event) => {
            if (props.onClose) {
              props.onClose(event, "closeButtonClick" as any);
            }
          }}
        >
          <IconSquareXFilled size={30} color="#E2E3E6" />
        </DialogCloseButton>
      )}

      {children}
    </MUIDialog>
  );
};
