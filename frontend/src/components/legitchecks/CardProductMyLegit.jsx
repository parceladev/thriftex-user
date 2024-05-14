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
        className="flex flex-col border border-black cursor-pointer dark:border-gray-600 hover:bg-gray-200 rounded-md shadow-md shadow-gray-400"
      >
        <img
          className="h-48 sm:h-72 shadow-sm shadow-gray-400"
          src={product.file_path}
          alt={product.nama_item}
        />
        <p className="py-3 text-center dark:bg-secondary text-textBlack dark:text-textWhite rounded-md">
          {product.nama_item}
        </p>
        <p className="py-3 font-bold text-center uppercase text-textWhite bg-secondary dark:bg-primary dark:text-black rounded-b-md">
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
