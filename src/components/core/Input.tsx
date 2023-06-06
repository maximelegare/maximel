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

interface InputProps extends Props {
  type: string;
}

const getLabelClassName = () => {
  return "font-semibold text-sm opacity-60 gap-1";
};

const getInputClassName = () => {
  return "input-gray-900 input-bordered input w-full bg-gray-900 grow";
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
    <div className="flex flex-col gap-1 w-full">
      <div className="flex w-full flex-col gap-1">
        <label className={getLabelClassName()} htmlFor={name}>
          {label.toUpperCase()}
        </label>
        <input
          className={`${getInputClassName()} ${styles ? styles : ""}`}
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

export const Textarea: FC<Props> = ({
  name,
  value,
  styles,
  placeholder,
  label,
  handleChange,
  handleBlur,
  error
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className={getLabelClassName()} htmlFor={label}>
        {label.toUpperCase()}
      </label>
      <textarea
        className={`${getInputClassName()} ${styles ? styles : ""}`}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      {error && (
        <label htmlFor={name} className={getErrorLabelClassName()}>
          {error}
        </label>
      )}
    </div>
  );
};
