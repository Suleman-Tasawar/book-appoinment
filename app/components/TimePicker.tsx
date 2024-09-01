import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';

interface TimePickerComponentProps {
  label: string;
  time: Dayjs | null;
  setTime: (time: Dayjs | null) => void;
  errorMsg:string
}

const TimePickerComponent: React.FC<TimePickerComponentProps> = ({ label, time, setTime,errorMsg }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <TimePicker
        className='bg-white'
          value={time}
          onChange={(newTime) => setTime(newTime)}
          components={{ TextField: TextField }}
        />
      {errorMsg && <div className="text-red-500">{errorMsg}</div>}
      </div>
    </LocalizationProvider>
  );
};

export default TimePickerComponent;
