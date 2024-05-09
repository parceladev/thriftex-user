import { PropTypes } from 'prop-types';

const InputText = (props) => {
  const {
    label,
    name,
    type,
    htmlFor,
    id,
    isRequired = 'none',
    value,
    onChange,
    placeholder,
  } = props;

  return (
    <div className="mb-8">
      <label
        htmlFor={htmlFor}
        className="flex gap-2 mb-5 font-semibold uppercase"
      >
        {label}
        {isRequired === 'optional' && (
          <span className="text-xs font-normal"> (Optional)</span>
        )}
        {isRequired === 'required' && (
          <span className="text-xs font-normal text-red-500"> (Required)</span>
        )}
      </label>
      <input
        name={name}
        id={id}
        type={type}
        className="w-full p-2 bg-transparent border-b-2 border-gray-700 outline-none dark:bg-secondary dark:border-gray-200"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

InputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  isCategoryClassName: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  isRequired: PropTypes.oneOf(['required', 'optional', 'none']),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(File),
  ]),
  onChange: PropTypes.func,
};

export default InputText;
