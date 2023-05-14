import React from "react";
import type { FC, ReactNode } from "react";
import Link from "next/link";

interface Props {
  variant?: "small" | "icon";
  href?: string;
  styles?: string;
  children: ReactNode;
  targetBlank?: boolean;
  outline?: boolean;
  handleClick?: () => any;
}

export const Button: FC<Props> = ({
  children,
  variant,
  styles,
  href,
  targetBlank,
  outline,
  handleClick,
}) => {
  const getClasses = (variant?: string) => {
    switch (variant) {
      case "icon": {
        return `btn-circle btn-sm text-lg hover:bg-[#3c1155]`;
      }
      default: {
        return `w-24`;
      }
    }
  };
  return (
    <>
      {href ? (
        <Link
          target={targetBlank ? "_blank" : ""}
          className={`${getClasses(variant)} ${styles ?? ""}
           ${outline ? "btn-outline" : ""}  btn-sm btn`}
          href={href}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className={`${getClasses(variant)} ${styles ?? ""} ${
            outline ? "btn-outline" : ""
          } btn-sm btn`}
        >
          {children}
        </button>
      )}
    </>
  );
};
