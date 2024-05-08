import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { PropTypes } from 'prop-types';

const BorderButton = (props) => {
  const { name, icon } = props;
  return (
    <div>
      <button className="flex items-center justify-center w-full gap-2 p-3 border rounded-md">
        <FontAwesomeIcon icon={faGoogle} className={icon} />
        <p>{name}</p>
      </button>
    </div>
  );
};

BorderButton.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
};

export default BorderButton;
