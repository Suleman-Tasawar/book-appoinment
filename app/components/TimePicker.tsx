import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { TimePickerComponentProps } from "../utils/interface";

const TimePickerComponent: React.FC<TimePickerComponentProps> = ({
  label,
  time,
  setTime,
  errorMsg,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <TimePicker
          className="bg-white"
          value={time}
          onChange={(newTime) => setTime(newTime)}
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
        {errorMsg && <div className="text-red-500">{errorMsg}</div>}
      </div>
    </LocalizationProvider>
  );
};

export default TimePickerComponent;
