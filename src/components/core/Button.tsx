import React from "react";
import type { FC, ReactNode } from "react";
import Link from "next/link";

interface Props {
  variant?: "small" | "icon";
  href?: string;
  styles?: string;
  children: ReactNode;
  targetBlank?: boolean;
  handleClick?: () => any;
}

export const Button: FC<Props> = ({
  children,
  variant,
  styles,
  href,
  targetBlank,
  handleClick,
}) => {
  const getClasses = (variant?: string) => {
    switch (variant) {
      case "icon": {
        return "btn-circle btn-sm text-lg";
      }
      default: {
        return "w-24";
      }
    }
  };
  return (
    <>
      {href ? (
        <Link
          target={targetBlank ? "_blank" : ""}
          className={`${getClasses(variant)} ${
            styles ?? ""
          } btn-outline btn-sm btn`}
          href={href}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className={`${getClasses(variant)} ${
            styles ?? ""
          } btn-outline btn-sm btn`}
        >
          {children}
        </button>
      )}
    </>
  );
};
