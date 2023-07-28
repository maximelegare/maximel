import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDialogs } from "~/hooks/useDialogs";
import { Button } from "../Button";

export const Languages = () => {
  const { locales, push, locale } = useRouter();

  const [language, setLanguage] = useState("");


  const {closeDialog} = useDialogs()


  useEffect(() => {
    setLanguage(locale || "");
  }, [locale]);

  const mapLocales = locales?.map((locale) => {
    return { locale: locale };
  });

  const handleSave = async () => {
    const elem = document.activeElement as HTMLElement;

    try {
      /**
       * Close the Dropdown by removing the blur from element
       */
      if (elem) {
        elem?.blur();

        await push("/", undefined, { locale: language });
        closeDialog("change-lang")
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-4">
        <div>
          {mapLocales?.map(({ locale }, idx) => {
            return (
              <div key={idx} className="w- mb-3">
                <div className="flex w-14 cursor-pointer">
                  <div className="grow text-white opacity-70">
                    {locale.toUpperCase()}
                  </div>
                  <input
                    type="radio"
                    name={locale}
                    className="radio border-gray-300 checked:bg-gray-300"
                    checked={language === locale}
                    onChange={() => setLanguage(locale)}
                  />
                </div>
              </div>
            );
          })}
          <div className="mt-5  flex">
            <Button variant="small" handleClick={() => handleSave()}>Save</Button>
          </div>
        </div>
      </div>
    </>
  );
};
