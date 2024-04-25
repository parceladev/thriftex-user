import { useState } from 'react';
import PropTypes from 'prop-types';
import ImageUploadBox from './ImageUploadBox';

const InputImage = (props) => {
  const { label, htmlFor, isRequired, images, handleImageChange } = props;
  // const [images, setImages] = useState([]);

  // const handleImageChange = (files) => {
  //   setImages([
  //     ...images,
  //     ...Array.from(files).map((file) => URL.createObjectURL(file)),
  //   ]);
  // };

  return (
    <div className="mb-8">
      <label
        htmlFor={htmlFor}
        className="flex gap-2 mb-2 font-semibold text-gray-700 uppercase"
      >
        {label}
        {isRequired === 'optional' && (
          <span className="font-normal text-gray-700"> (Optional)</span>
        )}
        {isRequired === 'required' && (
          <span className="text-xs font-normal text-red-500"> (Required)</span>
        )}
      </label>
      <p className="text-gray-600">
        Make sure to upload 6 images. <br />
        Image size must be less than 1,000KB.
      </p>
      <div className="flex flex-wrap -mx-2">
        {images.map((image, index) => (
          <div key={index} className="w-40 h-40 px-2 mb-4 lg:w-48 lg:h-48">
            <img
              src={image}
              alt={`upload ${index}`}
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        ))}
        {images.length < 12 && (
          <div className="px-2 mb-4">
          <ImageUploadBox onFileSelectSuccess={handleImageChange} />
        </div>
        )}
      </div>
    </div>
  );
};

InputImage.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  id: PropTypes.string,
  images: PropTypes.array, // Tambahkan ini
  handleImageChange: PropTypes.func.isRequired, // Tambahkan ini
  isRequired: PropTypes.oneOf(['required', 'optional', 'none']),
};

export default InputImage;
