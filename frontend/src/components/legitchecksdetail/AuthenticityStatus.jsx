import PropTypes from 'prop-types';

const AuthenticityStatus = ({ message }) => {
  return (
    <div className={`flex gap-3 py-5 items-center`}>
      <p>{message}</p>
    </div>
  );
};

AuthenticityStatus.propTypes = {
  message: PropTypes.string.isRequired,
};

export default AuthenticityStatus;
