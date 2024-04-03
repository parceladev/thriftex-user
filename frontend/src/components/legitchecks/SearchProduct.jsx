import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faArrowDownWideShort,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles';

const SearchProduct = () => {
  return (
    <div className="flex h-14 w-full">
      <input
        type="text"
        placeholder="Example: ID- 040121"
        className="p-3 border border-black h-full w-4/5 light:bg-white dark:border-gray-400"
      />
      <button
        className={`${styles.flexCenter} p-5 border border-black dark:border-gray-400`}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />
      </button>
      <button
        className={`${styles.flexCenter} p-5 border border-black dark:border-gray-400 ml-5`}
      >
        <FontAwesomeIcon icon={faArrowDownWideShort} className="text-2xl" />
      </button>
    </div>
  );
};

export default SearchProduct;
