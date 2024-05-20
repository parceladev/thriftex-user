import { PropTypes } from 'prop-types';
import { FaPlus } from 'react-icons/fa';

const ImageUploadBox = (props) => {
  const { onFileSelectSuccess } = props;
  return (
    <label className="flex items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-md cursor-pointer sm:w-56 sm:h-56 hover:border-gray-500">
      <input
        type="file"
        className="hidden"
        accept="image/*"
        multiple
        onChange={onFileSelectSuccess}
      />
      <FaPlus className="text-gray-500" size={20} />
    </label>
  );
};

ImageUploadBox.propTypes = {
  onFileSelectSuccess: PropTypes.func.isRequired,
  inputKey: PropTypes.number.isRequired, 
};

export default ImageUploadBox;
