import { PropTypes } from 'prop-types';

const InputField = (props) => {
  const { label, name, value, onChange, required, type = 'text', note = '', rows = 3 } = props;

  return (
    <div className="mb-4">
      <label className="font-semibold block mb-2 text-sans text-black uppercase font-sans text-lg">
        {label}
        {required && (
          <span className="text-sans text-red-600 font-light capitalize text-[14px] ml-3">
            (Required)
          </span>
        )}
      </label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className="w-full p-3 border-b-2 border-black text-[14px] focus:outline-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full p-3 border-b-2 border-black text-[14px] focus:outline-none"
        />
      )}
      {note && <p className="text-red-600 text-xs mt-1">{note}</p>}
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
    rows: PropTypes.number,  // Add this if using textarea
  };

export default InputField;
