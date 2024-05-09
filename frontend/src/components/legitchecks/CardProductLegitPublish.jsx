import { useState } from 'react';
import { PropTypes } from 'prop-types';
import LegitDetail from './LegitDetail';

const CardProductLegitPublish = (props) => {
  const { product } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div
        onClick={() => toggleModal(product)}
        className="flex flex-col border border-black dark:bg-[#0D1117] dark:border-gray-600"
      >
        <img
          className="h-44 sm:h-80"
          src={product.file_path}
          alt={product.nama_item}
        />
        <p className="py-3 text-center">{product.nama_item}</p>
        <p className="py-3 font-bold text-center uppercase text-primary dark:bg-primary dark:text-textBlack">
          {product.check_result || 'waiting'}
        </p>
      </div>
      {isModalOpen && <LegitDetail product={product} onClose={toggleModal} />}
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
  onClick: PropTypes.func,
};
export default CardProductLegitPublish;
