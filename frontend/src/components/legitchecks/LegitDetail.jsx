import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  InputField,
  TextAreaField,
  PhotosField,
  AuthenticityStatus,
} from '../../components/legitchecksdetail';
import { fetchDetailMyLegit } from '../../utils/legit-api-service';

const LegitDetail = ({ onClose, product }) => {
  const [legitData, setDetailLegit] = useState([]);

  const hasAuthenticityData =
    legitData &&
    legitData.authentic_comment &&
    legitData.authentic_comment.length > 0;

  const checkResult = hasAuthenticityData
    ? legitData.authentic_comment[0].check_result === 'real'
      ? 'You are real.'
      : legitData.authentic_comment[0].check_result === 'fake'
      ? 'Fake product detected'
      : legitData.authentic_comment[0].check_result === 'processing'
      ? 'Validator rejected your style.'
      : 'Unexpected result'
    : 'No result available';

  const checkNote = hasAuthenticityData
    ? legitData.authentic_comment[0].check_note
    : 'No details available';

  useEffect(() => {
    const getDetailLegitData = async () => {
      if (product?.case_code) {
        try {
          const data = await fetchDetailMyLegit(product.case_code);
          if (data && data.status && data.data.length > 0) {
            setDetailLegit(data.data[0]);
          } else {
            throw new Error('Failed to fetch product details');
          }
        } catch (err) {
          console.error('Error on fetching:', err);
        }
      } else {
        setDetailLegit(null);
      }
    };

    getDetailLegitData();
  }, [product, product.case_code]);

  return (
    <div className="fixed inset-0 top-0 z-50 flex items-center justify-center p-6 bg-opacity-50 bg-secondary dark:bg-primary dark:bg-opacity-5 sm:p-0">
      <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-shadow-md dark:shadow-gray-800 bg-primary dark:bg-secondary">
        <div className="flex flex-row items-center justify-between p-4 mb-5 border-b-2 ">
          <p className="text-xl font-bold text-sans">Legit Check Detail</p>
          <button type="button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} className="text-[16px]" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto" style={{ maxHeight: '80vh' }}>
          <InputField
            label="CASE CODE"
            name="case-code"
            value={legitData.case_code}
          />
          <InputField
            label="ITEM CATEGORY"
            name="category"
            value={legitData.kategori_name}
          />
          <InputField
            label="NAMA BRAND"
            name="brand"
            value={legitData.nama_brand}
          />
          <InputField
            label="ITEM NAME"
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
            label="PURCHASE DATE"
            name="purchase"
            value={legitData.purchase}
          />
          <InputField
            label="STORE NAME"
            name="storeName"
            value={legitData.toko_pembelian}
          />
          <InputField
            label="ITEM CONDITION"
            name="condition"
            value={legitData.kondisi}
          />
          <TextAreaField
            label="OTHER NOTE"
            name="otherNote"
            value={legitData.catatan}
            required={false}
          />
          <div className="flex items-center justify-center w-full gap-5 pt-6">
            <span className="h-[1px] w-1/2 sm:w-1/12 border border-gray-700 dark:border-white"></span>
            <h3 className="text-lg font-semibold text-center uppercase w-[450px] sm:w-56">
              Legit Check Result
            </h3>
            <span className="h-[1px] w-1/2 sm:w-10/12 border border-gray-700 dark:border-white"></span>
          </div>
          {hasAuthenticityData ? (
            <div className="flex flex-col gap-3">
              <AuthenticityStatus status={checkResult} message={checkResult} />
              <InputField
                label="DETAIL DESCRIPTION"
                name="detailDescription"
                value={checkNote}
                type="textarea"
              />
            </div>
          ) : (
            <div className="flex gap-3 py-3">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10.2617C0 15.7847 4.477 20.2617 10 20.2617C15.523 20.2617 20 15.7847 20 10.2617C20 4.73872 15.523 0.261719 10 0.261719C4.477 0.261719 0 4.73872 0 10.2617ZM18 10.2617C18 12.3835 17.1571 14.4183 15.6569 15.9186C14.1566 17.4189 12.1217 18.2617 10 18.2617C7.87827 18.2617 5.84344 17.4189 4.34315 15.9186C2.84285 14.4183 2 12.3835 2 10.2617C2 8.13999 2.84285 6.10516 4.34315 4.60486C5.84344 3.10457 7.87827 2.26172 10 2.26172C12.1217 2.26172 14.1566 3.10457 15.6569 4.60486C17.1571 6.10516 18 8.13999 18 10.2617ZM16 10.2617C16.0012 11.0498 15.8466 11.8304 15.545 12.5586C15.2435 13.2868 14.801 13.9482 14.243 14.5047L10 10.2617V4.26172C11.5913 4.26172 13.1174 4.89386 14.2426 6.01908C15.3679 7.1443 16 8.67042 16 10.2617Z"
                  fill="currentColor"
                />
              </svg>
              <p>Your legit check is still under review</p>
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
