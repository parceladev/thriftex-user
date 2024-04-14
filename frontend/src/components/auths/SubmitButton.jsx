import { PropTypes } from 'prop-types';

const SubmitButton = (props) => {
  const { name, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="w-full p-3 text-center rounded-md bg-black/30"
    >
      {name}
    </button>
  );
};

SubmitButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default SubmitButton;
