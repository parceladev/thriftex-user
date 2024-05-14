import { PropTypes } from "prop-types";
import { useTranslation } from "react-i18next";

const AlertLegitCheck = (props) => {
  const { t } = useTranslation();
  const { isVisible, onClose } = props;
  if (!isVisible) return null;

  const buttonStyle = "inline-block text-center py-4 px-4 w-auto min-w-[150px]";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50 dark:bg-secondary dark:bg-opacity-70">
      <div className="bg-primary dark:bg-secondary dark:shadow-md dark:shadow-gray-800 p-8 w-[600px] h-[400px] flex flex-col m-10 sm:m-0 text-center justify-between items-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="mt-8 font-serif text-4xl font-normal leading-tight tracking-widest sm:text-6xl">
            {t("Heading Alert")}
          </h1>
          <p className="mt-10">
            {t("Paraf Alert")}
            <span className="text-xl font-bold"> {t("Span Alert")} </span> {t("Continous Paraf Alert")}
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 mb-8">
          <a
            href="/user/my-legit"
            className={`${buttonStyle} dark:bg-primary bg-secondary text-textWhite dark:text-textBlack font-bold`}
            onClick={onClose}
          >
            {t("Span MyLegit")}
          </a>
          <button
            className={`${buttonStyle} border bg-transparent font-bold border-secondary`}
            onClick={onClose}
          >
            {t("Close")}
          </button>
        </div>
      </div>
    </div>
  );
};

AlertLegitCheck.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
};

export default AlertLegitCheck;
