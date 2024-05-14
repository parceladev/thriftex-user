import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
const Jumbotron = () => {
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col items-center justify-center text-textWhite gap-8 h-[250px] p-10 text-center mt-14 sm:h-screen"
      style={{
        backgroundImage: "url('../../../public/homepage/jumbotron.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="block text-2xl sm:text-[40px] font-didot py-2">
        {t("IS YOUR FASHION STYLE LEGIT?")}
      </h1>
      <a
        href="/user/legit-check"
        className="flex items-center gap-3 px-5 py-3 mt-2 bg-transparent border border-white rounded-lg dark:hover:text-textBlack hover:bg-white hover:text-secondary "
      >
        <p className="font-sans text-md sm:text-lg">{t("CHECK NOW")}</p>
        <FontAwesomeIcon className="w-6 h-6" icon={faArrowRight} />
      </a>
    </div>
  );
};

export default Jumbotron;
