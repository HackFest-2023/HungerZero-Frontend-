import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Translate = () => {
    const { t, i18n } = useTranslation();
    useEffect(() => {
      i18n.changeLanguage("en");
    }, []);
  return (
    <div className="flex gap-5 m-10">
    <h1 className="text-3xl font-bold">{ t("hello") }</h1>
    {
      i18n.language === "en" ? (
    <button className="bg-orange-200 px-5 rounded-lg" onClick={() => i18n.changeLanguage("hi")}>Hindi</button>
      ) : (
        <button className="bg-orange-200 px-5 rounded-lg" onClick={() => i18n.changeLanguage("en")}>English</button>
      )
    }
  </div>
  )
}

export default Translate