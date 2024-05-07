import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  // faArrowDownWideShort,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles';
import { PropTypes } from 'prop-types';

const SearchProduct = (props) => {
  const { onSearchChange } = props;
  return (
    <div className="flex w-full h-14">
      <input
        type="text"
        placeholder="Example: ID- 040121"
        onChange={onSearchChange}
        className="w-full h-full p-3 border border-black light:bg-white dark:border-gray-400"
      />
      <button
        className={`${styles.flexCenter} p-5 border border-black dark:border-gray-400`}
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
};

export default SearchProduct;
