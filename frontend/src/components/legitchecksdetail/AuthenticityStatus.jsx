import PropTypes from 'prop-types';

const AuthenticityStatus = ({ status, message }) => {
  const statusStyles = {
    Declined: 'text-red-600',
    original: 'text-green-600',
    fake: 'text-orange-300',
  };

  return (
    <div className={`flex gap-3 py-5 items-center ${statusStyles[status]}`}>
      <p>{message}</p>
    </div>
  );
};

AuthenticityStatus.propTypes = {
  status: PropTypes.oneOf(['fake', 'original', 'Declined']),
  message: PropTypes.string.isRequired,
};

export default AuthenticityStatus;
