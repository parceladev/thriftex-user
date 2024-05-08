import { PropTypes } from 'prop-types';

const Modal = (props) => {
  const { show, onClose, title, description, button, onNavigate } = props;

  if (!show) {
    return null;
  }

  const handleButtonClick = () => {
    if (onNavigate) {
      onNavigate();
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col gap-8 p-12 text-center text-black bg-white shadow-lg max-w-[450px]">
        <h3 className="mb-8 text-3xl font-bold uppercase font-didot">
          {title}
        </h3>
        <p>{description}</p>
        <button
          onClick={handleButtonClick}
          className="px-4 py-5 mt-4 text-lg text-white uppercase bg-secondary"
        >
          {button}
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.string,
  onClose: PropTypes.string,
  onNavigate: PropTypes.func,
  button: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Modal;
