import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';

// Define the props for the TimePickerComponent
interface TimePickerComponentProps {
  label: string;
  time: Dayjs | null; // Use Dayjs or null for the time value
  setTime: (time: Dayjs | null) => void; // Callback to handle time changes
}

const TimePickerComponent: React.FC<TimePickerComponentProps> = ({ label, time, setTime }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <TimePicker
          value={time}
          onChange={(newTime) => setTime(newTime)}
          components={{ TextField: TextField }}
        />
      </div>
    </LocalizationProvider>
  );
};

export default TimePickerComponent;
