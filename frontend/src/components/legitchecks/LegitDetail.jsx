import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate, faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  InputField,
  TextAreaField,
  PhotosField,
  AuthenticityStatus,
} from '../../components/legitchecksdetail';
import { fetchDetailMyLegit } from '../../utils/legit-api-service';
import { useTranslation } from 'react-i18next';

const LegitDetail = ({ onClose, product }) => {
  const { t } = useTranslation();
  const [legitData, setDetailLegit] = useState(null);
  const [loading, setLoading] = useState(true);

  const hasAuthenticityData =
    legitData &&
    legitData.authentic_comment &&
    legitData.authentic_comment.length > 0;

  const checkResult = hasAuthenticityData
    ? legitData.authentic_comment[0].check_result === 'real'
      ? 'real'
      : legitData.authentic_comment[0].check_result === 'fake'
      ? 'fake'
      : legitData.authentic_comment[0].check_result === 'processing'
      ? 'processing'
      : 'unexpected'
    : 'noResult';

  const getCheckResultComponent = (result) => {
    switch (result) {
      case 'real':
        return (
          <div className="flex flex-col items-center justify-center text-center border border-black dark:border-white">
            <p className="w-full p-3 font-bold text-white uppercase bg-secondary dark:bg-primary dark:text-black">
              Original
            </p>
            <p className="w-full p-3 text-black uppercase dark:text-white dark:bg-secondary bg-primary">
              Verified By Thriftex.id
            </p>
          </div>
        );
      case 'fake':
        return (
          <div className="flex gap-4 text-black dark:text-white">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8792 18.7617C13.0009 18.7617 15.0357 17.9189 16.536 16.4186C18.0363 14.9183 18.8792 12.8835 18.8792 10.7617C18.8792 8.63999 18.0363 6.60516 16.536 5.10486C15.0357 3.60457 13.0009 2.76172 10.8792 2.76172C8.75742 2.76172 6.72259 3.60457 5.2223 5.10486C3.72201 6.60516 2.87915 8.63999 2.87915 10.7617C2.87915 12.8835 3.72201 14.9183 5.2223 16.4186C6.72259 17.9189 8.75742 18.7617 10.8792 18.7617ZM10.8792 20.7617C5.35615 20.7617 0.87915 16.2847 0.87915 10.7617C0.87915 5.23872 5.35615 0.761719 10.8792 0.761719C16.4022 0.761719 20.8792 5.23872 20.8792 10.7617C20.8792 16.2847 16.4022 20.7617 10.8792 20.7617ZM9.87915 14.7617H11.8792V16.7617H9.87915V14.7617ZM9.87915 4.76172H11.8792V12.7617H9.87915V4.76172Z"
                fill="currentColor"
              />
            </svg>
            <p>{t('Fake product detected')}</p>
          </div>
        );
      case 'processing':
        return (
          <div className="flex gap-4">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8792 18.7617C13.0009 18.7617 15.0357 17.9189 16.536 16.4186C18.0363 14.9183 18.8792 12.8835 18.8792 10.7617C18.8792 8.63999 18.0363 6.60516 16.536 5.10486C15.0357 3.60457 13.0009 2.76172 10.8792 2.76172C8.75742 2.76172 6.72259 3.60457 5.2223 5.10486C3.72201 6.60516 2.87915 8.63999 2.87915 10.7617C2.87915 12.8835 3.72201 14.9183 5.2223 16.4186C6.72259 17.9189 8.75742 18.7617 10.8792 18.7617ZM10.8792 20.7617C5.35615 20.7617 0.87915 16.2847 0.87915 10.7617C0.87915 5.23872 5.35615 0.761719 10.8792 0.761719C16.4022 0.761719 20.8792 5.23872 20.8792 10.7617C20.8792 16.2847 16.4022 20.7617 10.8792 20.7617ZM9.87915 14.7617H11.8792V16.7617H9.87915V14.7617ZM9.87915 4.76172H11.8792V12.7617H9.87915V4.76172Z"
                fill="currentColor"
              />
            </svg>
            <p>{t('Validator rejected your style.')}</p>
          </div>
        );
      default:
        return (
          <div className="p-2 text-gray-700 bg-gray-200 border border-gray-700 rounded-md">
            {t('Unexpected result')}
          </div>
        );
    }
  };

  const checkNote = hasAuthenticityData
    ? legitData.authentic_comment[0].check_note
    : 'No details available';

  useEffect(() => {
    setLoading(true);
    const getDetailLegitData = async () => {
      if (product?.case_code) {
        try {
          const data = await fetchDetailMyLegit(product.case_code);
          if (data && data.status && data.data.length > 0) {
            setDetailLegit(data.data[0]);
            setLoading(false);
          } else {
            throw new Error('Failed to fetch product details');
          }
        } catch (err) {
          setLoading(false);
          console.error('Error on fetching:', err);
        }
      } else {
        setDetailLegit(null);
      }
    };

    getDetailLegitData();
  }, [product, product.case_code]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-secondary dark:bg-primary dark:bg-opacity-5 ">
      <div className="w-full mx-auto overflow-hidden shadow-lg sm:max-w-screen-sm xs:h-full md:h-auto md:rounded-lg dark:bg-shadow-md dark:shadow-gray-800 dark:bg-secondary bg-primary">
        <div className="flex flex-row items-center justify-between p-4 mb-5 border-b-2 ">
          <h4 className="text-xl font-bold text-sans">{t('Heading Detail')}</h4>
          <button type="button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} className="text-[16px]" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto" style={{ maxHeight: '80vh' }}>
          {loading ? (
            <div className="min-h-[450px] flex items-center justify-center">
              <FontAwesomeIcon icon={faRotate} spin className="text-2xl" />
              <p className="ml-3">{t('Loading...')}</p>
            </div>
          ) : legitData ? (
            <>
              <InputField
                label={t('Label Detail 1')}
                name="case-code"
                value={legitData.case_code}
              />
              <InputField
                label={t('Label Detail 2')}
                name="category"
                value={legitData.kategori_name}
              />
              <InputField
                label={t('Label Detail 3')}
                name="brand"
                value={legitData.nama_brand}
              />
              <InputField
                label={t('Label Detail 4')}
                name="name"
                value={legitData.nama_item}
              />
              <PhotosField
                photos={
                  legitData.image_list
                    ? legitData.image_list.map((photo) => photo.file_path)
                    : []
                }
              />
              <InputField
                label={t('Label Detail 5')}
                name="purchase"
                value={legitData.purchase}
              />
              <InputField
                label={t('Label Detail 6')}
                name="storeName"
                value={legitData.toko_pembelian}
              />
              <InputField
                label={t('Label Detail 7')}
                name="condition"
                value={legitData.kondisi}
              />
              <TextAreaField
                label={t('Label Detail 8')}
                name="otherNote"
                value={legitData.catatan}
                required={false}
              />
              <div className="flex items-center justify-center w-full gap-5 pt-6">
                <span className="h-[1px] w-1/2 sm:w-1/12 border border-gray-700 dark:border-white"></span>
                <h3 className="text-lg font-semibold text-center uppercase w-[450px] sm:w-56">
                  {t('Heading Result')}
                </h3>
                <span className="h-[1px] w-1/2 sm:w-10/12 border border-gray-700 dark:border-white"></span>
              </div>
              {hasAuthenticityData ? (
                <div className="flex flex-col gap-3">
                  <AuthenticityStatus
                    status={checkResult}
                    message={getCheckResultComponent(checkResult)}
                  />
                  <InputField
                    label="DETAIL DESCRIPTION"
                    name="detailDescription"
                    value={checkNote}
                    type="textarea"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-3 py-3">
                  <FontAwesomeIcon icon={faRotate} className="w-6 h-6" />
                  <p>{t('Under Review')}</p>
                </div>
              )}
            </>
          ) : (
            <div className="min-h-[450px] flex items-center justify-center">
              <p>{t('Product details cannot be displayed')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

LegitDetail.propTypes = {
  product: PropTypes.shape({
    case_code: PropTypes.string,
    nama_item: PropTypes.string,
    photos: PropTypes.string,
    purchase: PropTypes.string,
    kondisi: PropTypes.string,
    toko_pembelian: PropTypes.string,
    check_result: PropTypes.string,
    catatan: PropTypes.string,
    authentic_comment: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
  item: PropTypes.object,
};

export default LegitDetail;
