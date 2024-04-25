import { PropTypes } from 'prop-types';
import { data } from '../../datas/options-legit-form';

const InputSelect = (props) => {
  const {
    label,
    name,
    htmlFor,
    id,
    isRequired = 'none',
    value,
    defaultValue,
    onChange,
    className,
    isCategoryClassName = false,
    dataType,
  } = props;

  let optionsData = [];

  switch (dataType) {
    case 'categories':
      optionsData = data.categories;
      break;
    case 'brands':
      optionsData = data.brands;
      break;
    case 'purchases':
      optionsData = data.purchases;
      break;
    case 'conditions':
      optionsData = data.conditions;
      break;
    default:
      optionsData = [];
  }

  return (
    <div className="mb-8">
      <label htmlFor={htmlFor} className="flex gap-2 mb-5 font-semibold text-gray-700 uppercase">
        {label}
        {isRequired === 'optional' && (
          <span className=" text-xs font-normal text-gray-700"> (Optional)</span>
        )}
        {isRequired === 'required' && (
          <span className="text-xs font-normal text-red-500"> (Required)</span>
        )}
      </label>
      <select
        name={name}
        id={id}
        className={`w-full p-2 border-b-2 border-gray-500 ${className}`}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled={!value} selected={!value} className="text-gray-400">
          {defaultValue}
        </option>
        {optionsData.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

InputSelect.propTypes = {
  label: PropTypes.string,
  // type: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  isCategoryClassName: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  isRequired: PropTypes.oneOf(['required', 'optional', 'none']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(File)]),
  onChange: PropTypes.func,
  dataType: PropTypes.string,
};

export default InputSelect;
