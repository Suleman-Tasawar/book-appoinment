import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DatePickerProps } from "../utils/interface";

const DatePickerComponent: React.FC<DatePickerProps> = ({
  label,
  onChange,
  errorMsg,
  pastDisable,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            className="bg-white text-gray-800 hover:outline-none"
            disablePast={pastDisable}
            views={pastDisable ? ["day", "month"] : ["day", "month", "year"]}
            onChange={(date) => onChange(date)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "1px solid lightgrey",
                  borderRadius: "4px",
                },
                "&:hover fieldset": {
                  border: "1px solid lightgrey",
                },
                "&.Mui-focused fieldset": {
                  border: "1px solid lightgrey",
                },
              },
            }}
          />
        </DemoContainer>
        {errorMsg && <div className="text-red-500 text-sm">{errorMsg}</div>}
      </div>
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
