import PropTypes from 'prop-types';

const PhotosField = ({ photos }) => {
  return (
    <div className="mb-4">
      <label className="block text-lg font-semibold text-black uppercase mb-2">
        ITEM PHOTOS 
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