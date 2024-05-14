import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";


const TextAreaField = (props) => {
  const { t } = useTranslation();
  const { label, name, value, onChange, required, note } = props;

  return (
    <div className="mb-4">
      <label className="block mb-2 text-lg font-semibold uppercase">
        {label}
        {required && (
          <span className="ml-3 text-sm font-light text-red-600">
            {t("Required")}
          </span>
        )}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-3 border-b-2 bg-transparent text-[14px] focus:outline-none"
        rows="1"
        readOnly
      />
      {note && <p className="mt-1 text-xs text-red-600">{note}</p>}
    </div>
  );
};

TextAreaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  note: PropTypes.string,
};

export default TextAreaField;
