import React from "react";
import type { FC, ReactNode } from "react";
import Link from "next/link";

interface Props {
  variant?: "small" | "icon" | "link";
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
        return `btn btn-circle btn-sm text-lg hover:bg-[#3c1155] `;
      }
      case "small": {
        return `btn btn-sm hover:bg-[#3c1155]`;
      }
      case "link":{
        return `link p-2 opacity-70 hover:opacity-100`
      }
      default: {
        return `btn-sm btn min-w-[6rem] ${outline ? "btn-outline" : ""}`;
      }
    }
  };
  return (
    <>
      {href ? (
        <Link
          target={targetBlank ? "_blank" : ""}
          className={`${getClasses(variant)} ${styles ?? ""}
             `}
          href={href}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className={`${getClasses(variant)} ${styles ?? ""}`}
        >
          {children}
        </button>
      )}
    </>
  );
};
