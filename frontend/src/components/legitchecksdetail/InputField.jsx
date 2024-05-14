import { PropTypes } from 'prop-types';
import { useRef, useEffect } from 'react';
import { useTranslation } from "react-i18next";


const InputField = (props) => {
  const { t } = useTranslation();
  const {
    label,
    name,
    value,
    onChange,
    required,
    type = 'text',
    note = '',
    rows = 1,
  } = props;

  const textAreaRef = useRef(null);

  const adjustHeight = () => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = 'inherit'; 
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  return (
    <div className="mb-4">
      <label className="block mb-2 font-sans text-lg font-semibold uppercase text-sans">
        {label}
        {required && (
          <span className="text-sans text-red-600 font-light capitalize text-[14px] ml-3">
            {t("Required")}
          </span>
        )}
      </label>
      {type === 'textarea' ? (
        <textarea
          ref={textAreaRef}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className="w-full p-3 border-b-2 text-[14px] focus:outline-none"
          readOnly
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full p-3 border-b-2 bg-transparent text-[14px] focus:outline-none"
          readOnly
        />
      )}
      {note && <p className="mt-1 text-xs text-red-600">{note}</p>}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  note: PropTypes.string,
  rows: PropTypes.number,
};

export default InputField;
