import React from "react";
import type { FC, ReactNode } from "react";
import Link from "next/link";

interface Props {
  variant?: "small" | "icon";
  href?: string;
  styles?: string;
  children: ReactNode;
  handleClick?: () => any;
}

export const Button: FC<Props> = ({
  children,
  variant,
  styles,
  href,
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
