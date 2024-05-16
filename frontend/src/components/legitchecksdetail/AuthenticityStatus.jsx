import PropTypes from 'prop-types';

const AuthenticityStatus = ({ message }) => {
  return (
    <div className={`flex gap-3 py-5 items-center`}>
      <p className="w-full font-bold sm:w-fit">{message}</p>
    </div>
  );
};

AuthenticityStatus.propTypes = {
  message: PropTypes.string.isRequired,
};

export default AuthenticityStatus;
