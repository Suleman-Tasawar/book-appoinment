import React from 'react';

interface TextAreaProps {
  label: string;
  labelClass: string;
  name: string;
  className: string;
  placeHolder: string;
  onChangeEvent: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  errorMsg?:string
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  labelClass,
  name,
  className,
  placeHolder,
  onChangeEvent,
  errorMsg
}) => {
  return (
    <div>
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className={`${className} textarea-bordered outline-none`}
        placeholder={placeHolder}
        onChange={onChangeEvent}
      />
      {errorMsg && <div className="text-red-500">{errorMsg}</div>}
    </div>
  );
};

export default TextArea;
