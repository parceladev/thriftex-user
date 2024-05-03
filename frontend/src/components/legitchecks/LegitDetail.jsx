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
    ? legitData.authentic_comment[0].check_result === 'processing'
      ? 'Declined'
      : legitData.authentic_comment[0].check_result
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="flex flex-row items-center justify-between p-4 mb-5 border-b-2 ">
          <p className="text-xl font-bold text-black text-sans ">
            Legit Check Detail
          </p>
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
          <div className="flex justify-center w-full p-5 mt-8 mb-6 border-b-2 border-b-gray-600">
            <h3 className="text-2xl italic font-semibold text-center uppercase ">
              Result
            </h3>
          </div>
          {hasAuthenticityData ? (
            <>
              <AuthenticityStatus status={checkResult} message={checkResult} />
              <InputField
                label="DETAIL DESCRIPTION"
                name="detailDescription"
                value={checkNote}
                type="textarea"
              />
            </>
          ) : (
            <div className="flex flex-col p-4 text-lg text-center text-gray-700 bg-orange-200">
              <p>Authentication details are not available at this moment.</p>
              <p>Please wait until it has been checked by the validator</p>
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
