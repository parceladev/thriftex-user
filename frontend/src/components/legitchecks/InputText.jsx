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
    className,
    isCategoryClassName = false,
    data,
  } = props;
  return (
    <div className="mb-8">
      <label htmlFor={htmlFor} className="block mb-5 font-bold text-gray-700 uppercase">
        {label}
        {isRequired === 'optional' && (
          <span className="text-gray-700">(Optional)</span>
        )}
        {isRequired === 'required' && (
          <span className="text-red-500">(Required)</span>
        )}
      </label>
      <input
        name={name}
        id={id}
        type={type}
        className={`w-full p-2 border-b-2 border-gray-500 ${className} ${
            !isCategoryClassName ? 'text-gray-400' : 'text-black'
          }`}
        value={value}
        onChange={onChange}
        data={data}
      />
    </div>
  );
};

InputTextLegitForm.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
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
