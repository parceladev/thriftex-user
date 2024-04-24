import { PropTypes } from 'prop-types';
import { FaPlus } from 'react-icons/fa';

const ImageUploadBox = (props) => {
  const { onFileSelectSuccess } = props;
  return (
    <label className="flex items-center justify-center w-40 h-40 border-2 border-gray-300 border-dashed rounded-md cursor-pointer lg:w-48 lg:h-48 hover:border-gray-500">
      <input
        type="file"
        className="hidden"
        accept="image/*"
        multiple
        onChange={(e) => onFileSelectSuccess(e.target.files)}
      />
      <FaPlus className="text-gray-500" size={20} />
    </label>
  );
};

ImageUploadBox.propTypes = {
  onFileSelectSuccess: PropTypes.func,
};

export default ImageUploadBox;
