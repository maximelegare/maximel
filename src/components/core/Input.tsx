import React from "react";
import { type FC } from "react";

interface Props {
  value: string | number;
  name: string;
  handleChange: (e?: any) => any;
  handleBlur: (e?: any) => any;
  styles?: string;
  placeholder?: string;
  label: string;
  error?: string;
}

interface TextareaProps extends Props {
  rowsNumber: number;
}

interface InputProps extends Props {
  type: string;
}

const getLabelClassName = () => {
  return "font-semibold text-sm opacity-60 gap-1";
};


const getErrorLabelClassName = () => {
  return "font-semibold text-sm opacity-60 gap-1 text-error";
};

export const Input: FC<InputProps> = ({
  name,
  value,
  type,
  styles,
  placeholder,
  label,
  handleChange,
  handleBlur,
  error,
}) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <div className="flex w-full flex-col gap-1">
        <label className={getLabelClassName()} htmlFor={name}>
          {label.toUpperCase()}
        </label>
        <input
          className={`input-gray-700 input-bordered input w-full grow bg-gray-700 ${
            styles ? styles : ""
          }`}
          name={name}
          value={value}
          type={type}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
      </div>
      {error && (
        <label htmlFor={name} className={getErrorLabelClassName()}>
          {error}
        </label>
      )}
    </div>
  );
};

export const Textarea: FC<TextareaProps> = ({
  name,
  value,
  styles,
  placeholder,
  label,
  handleChange,
  handleBlur,
  error,
  rowsNumber,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className={getLabelClassName()} htmlFor={label}>
        {label.toUpperCase()}
      </label>
      <textarea
        className={`textarea-bordered textarea bg-gray-700 ${
          styles ? styles : ""
        }`}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        rows={4}
      />
      {error && (
        <label htmlFor={name} className={getErrorLabelClassName()}>
          {error}
        </label>
      )}
    </div>
  );
};
