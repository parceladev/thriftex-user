import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";

const MyLegit = () => {
  const { t } = useTranslation();
  return (
    <a
      href="/user/my-legit"
      className="flex items-center justify-between w-full gap-4 py-6 px-4 cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <FontAwesomeIcon icon={faCheckDouble} className="text-xl" />
        <span className="font-sans text-xl font-semibold uppercase">
          {t("Span MyLegit")}
        </span>
      </div>
      <FontAwesomeIcon className="text-xl" icon={faArrowRight} />
    </a>
  );
};

export default MyLegit;
