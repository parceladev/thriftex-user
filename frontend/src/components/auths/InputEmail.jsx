import { PropTypes } from 'prop-types';

const InputEmail = (props) => {
  const { value, onChange } = props;

  return (
    <div>
      <input
        type="email"
        value={value}
        onChange={onChange}
        placeholder="Username or Email"
        className="p-4 bg-[rgba(217,217,217,0.2)] placeholder-white w-full text-white rounded-md"
      />
    </div>
  );
};

InputEmail.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputEmail;
