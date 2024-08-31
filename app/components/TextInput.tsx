import React, { ChangeEvent } from "react";

interface TextInputProps {
  inputName: string;
  prefix: string;
  prefixClass: string;
  type: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  inputName,
  prefix,
  prefixClass,
  type = "text",
  className = "",
  onChange,
}) => {
  return (
    <div>
      <label className={`${prefixClass}`} htmlFor="textInput">
        {prefix}
      </label>
      <input
        name={inputName}
        id="textInput"
        type={type}
        placeholder="Type here"
        className={`input rounded-[5px] input-bordered w-full max-w-xs ${className}`}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
