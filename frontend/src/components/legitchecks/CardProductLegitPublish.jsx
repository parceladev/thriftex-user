import { useState } from 'react';
import { PropTypes } from 'prop-types';
import LegitDetail from './LegitDetail';
import { useTranslation } from "react-i18next";

const CardProductLegitPublish = (props) => {
  const { t } = useTranslation();
  const { product } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div
        onClick={() => toggleModal(product)}
        className="flex flex-col border border-black dark:bg-secondary dark:border-gray-600 cursor-pointer hover:bg-gray-200 rounded-md shadow-md shadow-gray-400 dark:shadow-none"
      >
        <img
          className="h-44 sm:h-80 rounded-md"
          src={product.file_path}
          alt={product.nama_item}
        />
        <p className="py-3 text-center">{product.nama_item}</p>
        <p className="py-3 font-bold text-center uppercase text-primary bg-secondary dark:bg-primary dark:text-textBlack rounded-b-md">
        {t(product.check_result)}
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
