import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";


const PhotosField = ({ photos }) => {
  const { t } = useTranslation();
  return (
    <div className="mb-4">
      <label className="block text-lg font-semibold dark:text-primary text-black uppercase mb-2">
        {t("Label Detail")}
      </label>
      <div className=" grid grid-cols-3 gap-3 sm:grid-cols-6">
      {photos.slice(0, 6).map((photo, index) => (
          <div key={index}>
            <img
              src={photo}
              alt={`Item ${index}`}
              className="w-28 h-28 object-cover rounded-md sm:w-36 sm:h-36"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

PhotosField.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string)
};

export default PhotosField;