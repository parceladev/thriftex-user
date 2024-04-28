import { PropTypes } from 'prop-types';

const LegitDetail = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="p-4 bg-white rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-lg">{product.nama_item}</h2>
          <button onClick={onClose} className="px-4 py-2">
            Close
          </button>
        </div>
        <img
          src={product.file_path}
          alt={product.nama_item}
          className="w-40 h-40 my-4"
        />
        <p>Case Code: {product.case_code}</p>
        <p>Check Result: {product.check_result || 'waiting'}</p>
      </div>
    </div>
  );
};

LegitDetail.propTypes = {
  product: PropTypes.shape({
    case_code: PropTypes.string.isRequired,
    file_path: PropTypes.string,
    nama_item: PropTypes.string,
    check_result: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default LegitDetail;
