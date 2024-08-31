import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  label: string;
  options: Option[];
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({ label, options, selectedValue, onChange }) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <select
        className="select select-bordered rounded-[5px] w-full max-w-xs"
        value={selectedValue}
        onChange={onChange}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
