import { useState } from 'react';
import { PropTypes } from 'prop-types';
import LegitDetail from './LegitDetail';

const CardProductMyLegit = (props) => {
  const { product } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        onClick={() => toggleModal(product)}
        className="flex flex-col border border-black cursor-pointer dark:border-gray-600"
      >
        <img
          className="h-48 sm:h-72"
          src={product.file_path}
          alt={product.nama_item}
        />
        <p className="py-3 text-center text-black">{product.nama_item}</p>
        <p className="py-3 font-bold text-center text-white uppercase bg-black dark:bg-gray-300 dark:text-black">
          {product.check_result}
        </p>
      </div>
      {isModalOpen && <LegitDetail product={product} onClose={toggleModal} />}
    </>
  );
};

CardProductMyLegit.propTypes = {
  product: PropTypes.shape({
    case_code: PropTypes.string.isRequired,
    file_path: PropTypes.string,
    nama_item: PropTypes.string,
    check_result: PropTypes.string,
  }).isRequired,
};

export default CardProductMyLegit;
