/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { TextField, TextFieldProps } from "../text-field";
import { InputAdornment, Popover, useTheme } from "@mui/material";
import { IconCalendarWeek } from "@tabler/icons-react";
import { Calendar, DateRangePicker, RangeKeyDict } from "react-date-range";
import React from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface Props {
  isDateRange?: boolean;
  editableDateInputs?: boolean;
}
export const DatePicker = ({
  isDateRange,
  editableDateInputs = true,
  ...props
}: Props & TextFieldProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const theme = useTheme();
  const open = Boolean(anchorEl);
  const now = new Date();

  const [dateRange, setDateRange] = useState({
    startDate: new Date(2022, 0, 1),
    endDate: new Date(now.getFullYear(), now.getMonth() + 1, 0),
    key: "target",
  });
  const [date, setDate] = useState(new Date());

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!props.disabled) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleChooseDateRange(event: RangeKeyDict) {
    setDateRange({
      ...dateRange,
      startDate: event.target.startDate!,
      endDate: event.target.endDate!,
    });
  }

  function handleSingleDate(item: Date) {
    setDate(item);
    handleClose();
  }

  useEffect(() => {
    if (!isDateRange) {
      console.log(date);
    }
  }, [date]);
  return (
    <React.Fragment>
      <TextField
        {...props}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconCalendarWeek color={theme.palette.secondary.light} />
              </InputAdornment>
            ),
          },
        }}
        onClick={handleClick}
      />
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        onClose={handleClose}
      >
        {isDateRange ? (
          <DateRangePicker
            editableDateInputs={editableDateInputs}
            ranges={[dateRange]}
            onChange={handleChooseDateRange}
            color={theme.palette.primary.main}
            rangeColors={[theme.palette.primary.main]}
            moveRangeOnFirstSelection={false}
            retainEndDateOnFirstSelection={false}
          />
        ) : (
          <Calendar
            color={theme.palette.primary.main}
            date={date}
            minDate={new Date()}
            onChange={handleSingleDate}
          />
        )}
      </Popover>
    </React.Fragment>
  );
};
