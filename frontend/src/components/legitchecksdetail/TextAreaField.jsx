import PropTypes from 'prop-types';

const TextAreaField = (props) => {
  const { label, name, value, onChange, required, note } = props;

  return (
    <div className="mb-4">
      <label className="block mb-2 text-lg font-semibold text-black uppercase">
        {label}
        {required && (
          <span className="ml-3 text-sm font-light text-red-600">
            (Required)
          </span>
        )}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-3 text-sm border-2 border-black rounded focus:outline-none"
        rows="4"
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
