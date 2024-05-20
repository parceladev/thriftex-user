import { PropTypes } from 'prop-types';

const InputEmail = (props) => {
  const { value, onChange, placeholder, error } = props;

  return (
    <div>
      <input
        type="email"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`p-4 bg-[rgba(217,217,217,0.2)] placeholder-white w-full text-white rounded-md focus:outline-none ${error ? 'border border-red-500' : 'focus:ring-1 focus:ring-white border-none'}`}
      />
    </div>
  );
};

InputEmail.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.bool, // Add this line
};

export default InputEmail;
