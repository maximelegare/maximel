import React, { useEffect } from "react";
import type { FC } from "react";

import { Button } from "~/components/core/Button";
import { Dropdown } from "~/components/core/Dropdown";

import { useRouter } from "next/router";

import { FaGlobeAmericas } from "react-icons/fa";

import { useTranslation } from "next-i18next";

import { SvgWrapper } from "~/components/core/SvgWrapper";
import Logo from "../../public/assets/SVG/logo.svg";

export const Header: FC = () => {
  const { t } = useTranslation(["layout"]);

  const headerLinks = [
    { title: "header.portfolio", route: "#" },
    { title: "header.about", route: "#" },
  ];

  const { locales } = useRouter();

  const mapLocales = locales?.map((locale) => {
    return { title: locale };
  });

  return (
    <>
      <header
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-easing="ease-in-out-back"
        data-aos-delay="900"
        className={`fixed flex h-16 z-50 w-full justify-center`}
      >
        <div className="container flex items-center justify-between">
          <SvgWrapper width="w-16" svgComponent={<Logo />} />
          <ul className="flex gap-2">
            {headerLinks.map((el, idx) => (
              <li key={idx} className="" suppressContentEditableWarning>
                <Button styles="btn-base" outline href={el.route}>
                  {t(el.title)}
                </Button>
              </li>
            ))}

            <Dropdown
              trigger={{
                triggerTitle: <FaGlobeAmericas />,
                triggerStyles: "btn-base btn-circle w-8 btn-outline",
              }}
              content={{ items: mapLocales ?? [] }}
            />
          </ul>
        </div>
      </header>
    </>
  );
};
