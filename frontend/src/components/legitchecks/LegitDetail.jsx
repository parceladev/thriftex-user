/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
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
import { useTranslation } from "react-i18next";


const LegitDetail = ({ onClose, product }) => {
  const [legitData, setDetailLegit] = useState([]);
  const { t } = useTranslation();

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

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-secondary dark:bg-primary dark:bg-opacity-5 ">
      <div className="w-full sm:max-w-screen-sm mx-auto xs:h-full md:h-auto md:rounded-lg overflow-hidden shadow-lg dark:bg-shadow-md dark:shadow-gray-800 bg-primary">
        <div className="flex flex-row items-center justify-between p-4 mb-5 border-b-2 ">
          <h4 className="text-xl font-bold text-sans">{t("Heading Detail")}</h4>
          <button type="button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} className="text-[16px]" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto" style={{ maxHeight: '80vh' }}>
          <InputField
            label={t("Label Detail 1")}
            name="case-code"
            value={legitData.case_code}
          />
          <InputField
            label={t("Label Detail 2")}
            name="category"
            value={legitData.kategori_name}
          />
          <InputField
            label={t("Label Detail 3")}
            name="brand"
            value={legitData.nama_brand}
          />
          <InputField
            label={t("Label Detail 4")}
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
            label={t("Label Detail 5")}
            name="purchase"
            value={legitData.purchase}
          />
          <InputField
            label={t("Label Detail 6")}
            name="storeName"
            value={legitData.toko_pembelian}
          />
          <InputField
            label={t("Label Detail 7")}
            name="condition"
            value={legitData.kondisi}
          />
          <TextAreaField
            label={t("Label Detail 8")}
            name="otherNote"
            value={legitData.catatan}
            required={false}
          />
          <div className="flex items-center justify-center w-full gap-5 pt-6">
            <span className="h-[1px] w-1/2 sm:w-1/12 border border-gray-700 dark:border-white"></span>
            <h3 className="text-lg font-semibold text-center uppercase w-[450px] sm:w-56">
              {t("Heading Result")}
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
            <div className="flex gap-3 py-3 items-center">
              <FontAwesomeIcon icon={faRotate} className='w-6 h-6'/>
              <p>{t("Under Review")}</p>
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
