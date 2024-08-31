import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

// Define props for the DatePicker component
interface DatePickerProps {
  label: string;
  onChange: (date: Dayjs | null) => void;
}

const DatePickerComponent: React.FC<DatePickerProps> = ({ label, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker"   onChange={(date) => onChange(date)}/>
      </DemoContainer>
      </div>
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
