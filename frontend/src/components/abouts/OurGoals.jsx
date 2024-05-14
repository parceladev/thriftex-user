import { useTranslation } from "react-i18next";
const OurGoals = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="flex flex-col gap-5 mt-16 sm:mt-20">
        <h1 className="mb-3 text-2xl font-bold uppercase sm:text-4xl font-didot">
          {t("Heading Goals")}
        </h1>
        <div className="flex flex-col gap-8 mt-4 text-xl sm:mt-8 sm:gap-2">
          <h5>
            {t("Heading Goals 2")}
          </h5>
          <h5 className="flex items-center gap-3">
            {t("Heading Goals 3")}
            <span>
              <svg
                className="w-10 h-2 sm:h-4 sm:w-20"
                viewBox="0 0 25 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.206 4.23798H0.5V3.76202H23.206L20.2549 0.836555L20.5945 0.5L23.9553 3.83172L24.125 4L23.9553 4.16828L20.5945 7.5L20.2549 7.16345L23.206 4.23798Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </h5>
        </div>
        <div className="flex flex-col justify-between gap-8 mt-6 sm:mt-16 sm:flex-row">
          <div className="flex justify-center gap-8 text-xl sm:justify-start">
            <h3>{t("Heading Goals 4")}</h3>
            <h3>{t("Heading Goals 5")}</h3>
            <h3>{t("Heading Goals 6")}</h3>
          </div>
          <div className="mb-14 sm:mb-20 max-w-96">
            <h5>
              {t("Heading Goals 7")}
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoals;
