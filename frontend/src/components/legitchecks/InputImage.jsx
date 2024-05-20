import PropTypes from "prop-types";
import ImageUploadBox from "./ImageUploadBox";
import { IoCloseCircle } from 'react-icons/io5';
import { useTranslation } from "react-i18next";

const InputImage = (props) => {
  const { label, htmlFor, isRequired, images, removeImage, handleImageChange } = props;
  const { t } = useTranslation();

  
  return (
    <div className="mb-8">
      <label
        htmlFor={htmlFor}
        className="flex gap-2 mb-2 font-semibold uppercase"
      >
        {label}
        {isRequired === "optional" && (
          <span className="font-normal"> {t("Optional")}</span>
        )}
        {isRequired === "required" && (
          <span className="text-xs font-normal text-red-500"> {t("Required")}</span>
        )}
      </label>
      <p className="mb-5">
        {t("input image 1")} <br />
        {t("continous")}
      </p>
      <div className="flex flex-wrap gap-3">
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {images.map((image, index) => (
            <div key={index} className="relative">
            <img src={image} alt={`upload ${index}`} className="object-cover rounded-md h-36 w-36 sm:w-56 sm:h-56" />
             <button
               onClick={() => removeImage(index)}
               className="absolute top-[-10px] right-[-10px] bg-gray-400 text-white rounded-full p-1"
               aria-label="Remove image"
             >
               <IoCloseCircle size={24} />
             </button>
           </div>
          ))}
        </div>
        {images.length < 12 && (
          <div className="w-full">
            <ImageUploadBox onFileSelectSuccess={handleImageChange} />
          </div>
        )}
      </div>
    </div>
  );
};

InputImage.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  id: PropTypes.string,
  images: PropTypes.array,
  setImages: PropTypes.func.isRequired,
  removeImage: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func,
  isRequired: PropTypes.oneOf(["required", "optional", "none"]),
};

export default InputImage;
