/* eslint-disable no-unused-vars */ // hapus ini kalo
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';

const InputTextArea = (props) => {
  const { t } = useTranslation();
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
  } = props;
  return (
    <div className="mb-4">
      <label
        htmlFor={htmlFor}
        className="flex gap-2 mb-5 font-semibold uppercase"
      >
        {label}
        {isRequired === 'optional' && (
          <span className="text-xs font-normal"> {t('Optional')}</span>
        )}
        {isRequired === 'required' && (
          <span className="text-xs font-normal text-red-500">
            {' '}
            {t('Required')}
          </span>
        )}
      </label>
      <textarea
        id={id}
        className="w-full p-2 border-b-2 outline-none bg-primary border-secondary dark:border-primary dark:bg-secondary"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

InputTextArea.propTypes = {
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
};

export default InputTextArea;
