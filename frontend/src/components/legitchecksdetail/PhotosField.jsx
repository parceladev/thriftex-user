import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";


const PhotosField = ({ photos }) => {
  const { t } = useTranslation();
  return (
    <div className="mb-4">
      <label className="block text-lg font-semibold text-black uppercase mb-2">
        {t("Label Detail")}
      </label>
      <div className="flex justify-center space-x-2">
      {photos.slice(0, 6).map((photo, index) => (
          <div key={index}>
            <img
              src={photo}
              alt={`Item ${index}`}
              className="w-full h-full object-cover rounded-md"
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