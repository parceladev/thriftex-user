import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Modal from './Modal';
import InputPassword from './InputPassword';
import SubmitButton from './SubmitButton';

import { resetPassword } from '../../utils/auth-api-service';

const FormCreateNewPass = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const validateForm = () => {
    if (!password || !passwordConfirm) {
      setErrorMessage('All fields must be filled.');
      return false;
    }

    if (password !== passwordConfirm) {
      setErrorMessage('Passwords do not match.');
      return false;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const response = await resetPassword(token, password, passwordConfirm);
    setLoading(false);
    if (response.data && response.data.status) {
      setShowModal(true);
      setErrorMessage('');
    } else {
      setErrorMessage(response.error || 'Failed to reset password.');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleNavigate = () => {
    navigate('/auth/sign-in');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 sm:p-12 p-9 w-full rounded-2xl text-white bg-white/35 sm:w-[475px]"
    >
      <div className="flex flex-col gap-12 px-8 text-center text-white">
        <h3 className="text-2xl font-bold">Changes Authentication</h3>
        <p>Make sure to create difficult passwords and store them safely</p>
      </div>
      <InputPassword
        value={password}
        onChange={handlePasswordChange}
        placeholder="New Password"
      />
      <InputPassword
        value={passwordConfirm}
        onChange={handlePasswordConfirmChange}
        placeholder="Confirm Password"
      />
      <SubmitButton
        name={loading ? 'Changes Password' : 'Changes Password'}
        loading={loading}
      />
      {errorMessage && (
        <p className="mt-2 text-center text-red-500">{errorMessage}</p>
      )}
      <Modal
        title="Password changed!"
        description="The password has been successfully changed, Now you can log in using the same email with the new password."
        onNavigate={handleNavigate}
        button="Sign in"
        show={showModal}
        onClose={() => {
          setShowModal(false);
          handleNavigate();
        }}
      />
    </form>
  );
};

export default FormCreateNewPass;
