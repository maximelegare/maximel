import React from "react";
import { type FC } from "react";

interface Props {
  value: string | number;
  name: string;
  handleChange: (e:any) => any;
  type: string;
  styles?: string;
}

export const Input: FC<Props> = ({
  name,
  value,
  type,
  handleChange,
  styles,
}) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        className={`input-gray-900 input-bordered input w-full max-w-xs bg-gray-900 ${
          styles ? styles : ""
        }`}
        name={name}
        value={value}
        type={type}
        onChange={handleChange}
      />
    </div>
  );
};
