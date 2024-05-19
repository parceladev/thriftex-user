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

  const transformCheckResult = (checkResult) => {
    switch (checkResult) {
      case 'Canceled':
        return 'Declined';
      case 'fake':
        return 'fake';
      case 'Original':
        return 'Original';
      case 'Waiting':
        return 'Waiting';
      default:
        return checkResult;
    }
  };

  return (
    <>
      <div
        onClick={() => toggleModal(product)}
        className="flex flex-col border border-black shadow-md cursor-pointer hover:bg-dar dark:border-gray-60rounded-md rounded-b-md hover:shadow-gray-800 hover:shadow-md dark:shadow-none"
      >
        <img
          className="h-48 rounded-md sm:h-72"
          src={product.file_path}
          alt={product.nama_item}
        />
        <p className="py-3 text-center border border-t-black dark:border-t-white dark:bg-secondary text-textBlack dark:text-textWhite">
          {product.nama_item}
        </p>
        <p className="py-3 font-bold text-center uppercase rounded-b-sm text-textWhite dark:shadow-none bg-secondary dark:bg-primary dark:text-black">
          {t(transformCheckResult(product.check_result))}
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
