import { useState } from 'react';
import { PropTypes } from 'prop-types';
import LegitDetail from './LegitDetail';
import { useTranslation } from 'react-i18next';

const CardProductMyLegit = (props) => {
  const { t } = useTranslation();
  const { product } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        onClick={() => toggleModal(product)}
        className="flex flex-col border hover:bg-dar border-black cursor-pointer dark:border-gray-60rounded-md shadow-md rounded-b-md hover:shadow-gray-800 hover:shadow-md dark:shadow-none"
      >
        <img
          className="h-48 sm:h-72 rounded-md"
          src={product.file_path}
          alt={product.nama_item}
        />
        <p className="py-3 text-center border border-t-black dark:border-t-white dark:bg-secondary text-textBlack dark:text-textWhite">
          {product.nama_item}
        </p>
        <p className="py-3 font-bold text-center uppercase text-textWhite dark:shadow-none bg-secondary dark:bg-primary dark:text-black rounded-b-sm">
          {t(product.check_result)}
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
