import { PropTypes } from 'prop-types';
import CategoryOption from './CategoryOption';

const InputSelectLegitForm = (props) => {
  const {
    label,
    name,
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
      <select
        name={name}
        id={id}
        className={`w-full p-2 border-b-2 border-gray-500 ${className} ${
          !isCategoryClassName ? 'text-gray-400' : 'text-black'
        }`}
        value={value}
        onChange={onChange}
      >
        <CategoryOption data={data} />
      </select>
    </div>
  );
};

InputSelectLegitForm.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
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

export default InputSelectLegitForm;
