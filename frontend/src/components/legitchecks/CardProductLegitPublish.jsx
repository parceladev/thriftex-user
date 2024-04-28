import { PropTypes } from 'prop-types';

const CardProductLegitPublish = (props) => {
  const { product } = props;
  return (
    <div className="flex flex-col gap-5 border border-black dark:border-gray-600" onClick={() => onClick(product)}>
      <img className="h-72" src={product.file_path} alt={product.nama_item} />
      <p className="text-center text-black">{product.nama_item}</p>
      <p className="py-3 font-bold text-center text-white uppercase bg-black dark:bg-gray-300 dark:text-black">
        {product.check_result || 'waiting'}
      </p>
    </div>
  );
};

CardProductLegitPublish.propTypes = {
  product: PropTypes.shape({
    case_code: PropTypes.string.isRequired,
    file_path: PropTypes.string,
    nama_item: PropTypes.string,
    check_result: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired, // Menambahkan propTypes untuk onClick
};
export default CardProductLegitPublish;
