import { useTranslation } from "react-i18next";

const Tagline = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col sm:items-start items-center justify-center w-full gap-8 py-16  sm:py-20 sm:flex-row font-sans">
      <h2 className="text-3xl text-center uppercase sm:text-4xl sm:w-1/3 font-didot sm:text-left">
        {t("tagline 1")}
      </h2>
      <p className="sm:w-1/3  sm:text-justify text-center text-[13px]">
      {t('tagline 2')}
      </p>
      <p className="sm:w-1/3 text-[13px] sm:text-justify text-center">
        {t("tagline 3")}
        <span className="font-didot text-[18px]"> {t("span tagline")} </span>{t("continuation paragraph")}
      </p>
    </div>
  );
};

export default Tagline;
