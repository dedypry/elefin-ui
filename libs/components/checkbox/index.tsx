/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox as MUICheckbox, CheckboxProps } from "@mui/material";
import {
  IconCircleCheckFilled,
  IconCircle,
  IconCircleMinus,
  IconSquareCheckFilled,
  IconSquare,
  IconMinus,
} from "@tabler/icons-react";

const getSize = (size: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return 20;
    case "large":
      return 28;
    default:
      return 24;
  }
};

interface ICheckbox extends CheckboxProps {
  variant?: "circle" | "square";
}
export const Checkbox = (props: ICheckbox) => {
  const { size = "medium", variant = "square", ...rest } = props;
  const iconSize = getSize(size);

  const icons = {
    circle: {
      checked: <IconCircleCheckFilled size={iconSize} />,
      unchecked: <IconCircle size={iconSize} />,
      indeterminate: <IconCircleMinus size={iconSize} />,
    },
    square: {
      checked: <IconSquareCheckFilled size={iconSize} />,
      unchecked: <IconSquare size={iconSize} />,
      indeterminate: <IconMinus size={iconSize} />,
    },
  };

  return (
    <MUICheckbox
      size={size}
      checkedIcon={icons[variant].checked}
      icon={icons[variant].unchecked}
      indeterminateIcon={icons[variant].indeterminate}
      {...rest}
    />
  );
};
