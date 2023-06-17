import React from "react";
import { Button } from "./Button";

import { AiOutlineGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

export const Media = ({ href, type }: { href: string; type: string }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "github": {
        return <AiOutlineGithub />;
      }
      case "website": {
        return <BsGlobe />;
      }
    }
  };

  return <Button variant="icon" href={href} targetBlank>{getIcon(type)}</Button>;
};
