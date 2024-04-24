import { PropTypes } from 'prop-types';

const InputTextLegitForm = (props) => {
  const {
    label,
    name,
    type,
    htmlFor,
    id,
    isRequired = 'none',
    value,
    onChange,
    placeholder
  } = props;

  return (
    <div className="mb-8">
      <label
        htmlFor={htmlFor}
        className="flex gap-2 mb-5 font-semibold text-gray-700 uppercase"
      >
        {label}
        {isRequired === 'optional' && (
          <span className="font-normal text-gray-700"> (Optional)</span>
        )}
        {isRequired === 'required' && (
          <span className="text-xs font-normal text-red-500"> (Required)</span>
        )}
      </label>
      <input
        name={name}
        id={id}
        type={type}
        className="w-full p-2 border-b-2 border-gray-500"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

InputTextLegitForm.propTypes = {
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
  data: PropTypes.array.isRequired,
};

export default InputTextLegitForm;
