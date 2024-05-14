import { useTranslation } from "react-i18next";

const WhyWeDifferent = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="flex flex-col w-full py-2 sm:py-10">
        <h1 className="mb-4 text-2xl font-bold uppercase sm:text-4xl sm:mb-16 font-didot">
          {t("Different 1")}
        </h1>
        <table className="w-full my-10 text-center">
          <tr>
            <td className="p-4 border-b border-r border-gray-400 sm:p-16">
              <h3 className="text-md sm:text-xl"> {t("Different 2")}</h3>
            </td>
            <td className="p-4 border-b border-r border-gray-400 sm:p-16">
              <h3 className="text-md sm:text-xl"> {t("Different 3")}</h3>
            </td>
            <td className="p-4 border-b border-gray-400 sm:p-16">
              <h3 className="text-md sm:text-xl"> {t("Different 4")}</h3>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-r border-gray-400 sm:p-16">
              <h3 className="text-md sm:text-xl"> {t("Different 5")}</h3>
            </td>
            <td className="p-4 border-r border-gray-400 sm:p-16">
              <h3 className="text-md sm:text-xl">{t("Different 6")}</h3>
            </td>
            <td className="p-4 sm:p-16">
              <h3 className="text-md sm:text-xl"> {t("Different 7")}</h3>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default WhyWeDifferent;
