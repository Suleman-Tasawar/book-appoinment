import React, { ChangeEvent } from "react";

interface TextInputProps {
  inputName: string;
  prefix: string;
  prefixClass: string;
  type: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  errorMsg:string
  placeHolder:string
}

const TextInput: React.FC<TextInputProps> = ({
  inputName,
  prefix,
  prefixClass,
  type = "text",
  className = "",
  onChange,
  errorMsg,
  placeHolder
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
        placeholder={placeHolder}
        className={`input rounded-[5px] bg-white outline-none input-bordered w-full max-w-xs ${className}`}
        onChange={onChange}
      />
      {errorMsg && <div className="text-red-500">{errorMsg}</div>}
    </div>
  );
};

export default TextInput;
