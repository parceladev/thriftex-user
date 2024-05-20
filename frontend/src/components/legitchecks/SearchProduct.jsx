import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faArrowDownWideShort,
  faMagnifyingGlass,
  // faArrowDownWideShort,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles';
import { PropTypes } from 'prop-types';
import { useTranslation } from "react-i18next";


const SearchProduct = (props) => {
  const { t } = useTranslation();
  const { onSearchChange, value } = props;
  return (
    <div className="flex w-full h-14">
      <input
        type="text"
        placeholder={t("search page")}
        onChange={onSearchChange}
        value={value}
        className="w-full h-full p-3 bg-transparent border border-black dark:border-white"
      />
      <button
        className={`${styles.flexCenter} p-5 border border-black dark:border-white border-l-0`}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />
      </button>

      {/* The filter has not been used temporarily */}

      {/* <button
        className={`${styles.flexCenter} p-5 border border-black dark:border-gray-400 ml-5`}
      >
        <FontAwesomeIcon icon={faArrowDownWideShort} className="text-2xl" />
      </button> */}
    </div>
  );
};

SearchProduct.propTypes = {
  onSearchChange: PropTypes.func,
  value: PropTypes.string
};

export default SearchProduct;
