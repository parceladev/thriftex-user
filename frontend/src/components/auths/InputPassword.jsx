import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const InputPassword = (props) => {
  const { placeholder, value, onChange } = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        value={value}
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        placeholder={placeholder}
        className="p-4 bg-[rgba(217,217,217,0.2)] placeholder-white text-white w-full rounded-md"
      />
      <FontAwesomeIcon
        icon={showPassword ? faEyeSlash : faEye}
        onClick={togglePasswordVisibility}
        className="absolute inset-y-0 my-auto text-white cursor-pointer right-4"
      />
    </div>
  );
};

InputPassword.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default InputPassword;
