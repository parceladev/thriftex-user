import PropTypes from 'prop-types';

const TextAreaField = (props) => {
  const { label, name, value, onChange, required, note } = props;

  return (
    <div className="mb-4">
      <label className="block text-lg font-semibold text-black uppercase mb-2">
        {label}
        {required && (
          <span className="text-red-600 font-light text-sm ml-3">(Required)</span>
        )}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-3 border-2 border-black text-sm focus:outline-none rounded"
        rows="4" // Atau jumlah yang Anda inginkan
      />
      {note && <p className="text-red-600 text-xs mt-1">{note}</p>}
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