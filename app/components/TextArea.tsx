import React from 'react';

interface TextAreaProps {
  label: string;
  labelClass: string;
  name: string;
  className: string;
  placeHolder: string;
  onChangeEvent: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  labelClass,
  name,
  className,
  placeHolder,
  onChangeEvent
}) => {
  return (
    <div>
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className={`${className} textarea-bordered`}
        placeholder={placeHolder}
        onChange={onChangeEvent}
      />
    </div>
  );
};

export default TextArea;
