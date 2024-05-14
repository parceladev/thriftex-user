import PropTypes from "prop-types";
import ImageUploadBox from "./ImageUploadBox";
import { useTranslation } from "react-i18next";

const InputImage = (props) => {
  const { label, htmlFor, isRequired, images, handleImageChange } = props;
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
            <img
              key={index}
              src={image}
              alt={`upload ${index}`}
              className="object-cover rounded-md h-36 w-36 sm:w-56 sm:h-56"
            />
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
  handleImageChange: PropTypes.func,
  isRequired: PropTypes.oneOf(["required", "optional", "none"]),
};

export default InputImage;
