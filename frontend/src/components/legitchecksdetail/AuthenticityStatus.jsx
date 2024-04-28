import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const AuthenticityStatus = ({ status, message }) => {
  const statusStyles = {
    FAKE: 'text-red-600', // Merah untuk produk palsu
    ORIGINAL: 'text-green-600', // Hijau untuk produk asli
  };

  return (
    <div className='mb-3'>
      <h3 className="font-semibold text-lg text-black uppercase mb-2">AUTHENTICITY</h3>
      <div className={`flex items-center ${statusStyles[status]}`}>
        <FontAwesomeIcon icon={faExclamationCircle} />
        <span className="ml-2">{message}</span>
      </div>
    </div>
  );
};

AuthenticityStatus.propTypes = {
  status: PropTypes.oneOf(['FAKE', 'ORIGINAL']),
  message: PropTypes.string.isRequired,
};

export default AuthenticityStatus;
