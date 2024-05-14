import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAccessToken } from "../../utils/token-utilities";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const ButtonFormLegit = () => {
  const { t } = useTranslation();
  const isUserLoggedIn = !!getAccessToken();

  return (
    <>
      {/* Desktop button */}
      <div className="hidden sm:flex bg-black dark:bg-white border border-black px-5 justify-center min-w-[175px]">
        {isUserLoggedIn ? (
          <a
            href="/user/legit-check-form"
            className="flex items-center gap-3 text-white dark:text-black "
          >
            <p className="text-xl uppercase font-sans font-medium">
              {t("button form legit")}
            </p>
            <FontAwesomeIcon icon={faPlus} className="text-2xl" />
          </a>
        ) : (
          <a
            href="/auth/sign-in"
            className="flex items-center gap-3 text-white dark:text-black"
          >
            <p className="text-xl uppercase"> {t("button form legit")}</p>
            <FontAwesomeIcon icon={faPlus} className="text-2xl" />
          </a>
        )}
      </div>
      {/* Mobile floating button */}
      <div className="fixed flex items-center justify-center w-24 h-24 p-3 bg-black border border-black rounded-full shadow-lg sm:hidden bottom-8 right-8 dark:bg-white">
        {isUserLoggedIn ? (
          <a
            href="/user/legit-check-form"
            className="flex items-center justify-center text-white dark:text-black"
          >
            <FontAwesomeIcon icon={faPlus} className="text-4xl" />
          </a>
        ) : (
          <a
            href="/auth/sign-in"
            className="flex items-center justify-center text-white dark:text-black"
          >
            <FontAwesomeIcon icon={faPlus} className="text-4xl" />
          </a>
        )}
      </div>
    </>
  );
};

export default ButtonFormLegit;
