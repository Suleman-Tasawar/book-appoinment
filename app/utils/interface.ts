// Import Dayjs for type definitions
import { Dayjs } from 'dayjs';

// Button component interface
export interface ButtonProps {
    btnType: any;
    btnLink: string;
    btnText: string;
    className: string;
}

// Card component interfaces
export interface ActionBadge {
    label: string;
    url: string;
}

export interface CardProps {
    minImage?:boolean;
    styles?: string;
    image: string;
    title: string;
    badge?: string;
    text: string;
    actionBadge?: ActionBadge[];
}

// DatePicker component interface
export interface DatePickerProps {
    label: string;
    onChange: (date: Dayjs | null) => void;
    errorMsg: string | null;
    pastDisable: boolean;
}

// HeaderCard component type
export interface HeaderCardProps {
    title: string;
    titleClass: string;
    text: string;
    textClass: string;
}

// Select component interfaces
export interface Option {
    value: string;
    label: string;
}

export interface SelectInputProps {
    label: string;
    options: Option[];
    selectedValue: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    errorMsg: string;
}

// TextInput component interface
export interface TextInputProps {
    inputName: string;
    prefix: string;
    prefixClass: string;
    type: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errorMsg: string;
    placeHolder: string;
}

// TextArea component interface
export interface TextAreaProps {
    label: string;
    labelClass: string;
    name: string;
    className: string;
    placeHolder: string;
    onChangeEvent: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    errorMsg?: string;
}

// TimePicker component interface
export interface TimePickerComponentProps {
    label: string;
    time: Dayjs | null;
    setTime: (time: Dayjs | null) => void;
    errorMsg: string;
}
