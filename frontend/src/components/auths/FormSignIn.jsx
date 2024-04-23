import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../utils/auth-api-service';

import InputPassword from './InputPassword';
import InputEmail from './InputEmail';
import SubmitButton from './SubmitButton';
import BorderButton from './BorderButton';

const FormSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    const handleSuccess = () => {
      setSuccessMessage('Please Wait, Redirecting...');
      setTimeout(() => {
        navigate('/user/home');
      }, 1000);
    };

    const handleError = (message) => {
      setErrorMessage(message);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    };

    if (!email || !password) {
      handleError('Both email and password are required.');
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
      handleError('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      handleError('Password must be at least 8 characters long.');
      return;
    }

    const response = await signIn(email, password);
    if (response.data) {
      handleSuccess();
    } else {
      handleError(response.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 sm:p-12 p-9 rounded-2xl text-white bg-white/35 w-full sm:w-[475px]"
    >
      <a href="#" className="flex justify-center mb-4">
        <img src="/src/assets/auth/form-logo.png" alt="Auth Form Logo" />
      </a>
      <InputEmail
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Username or Email"
      />
      <InputPassword
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Your Password"
      />
      {errorMessage && (
        <p className="mt-2 text-center text-red-500">{errorMessage}</p>
      )}
      {successMessage && (
        <p className="mt-2 text-center text-green-500">{successMessage}</p>
      )}
      <a href="#" className="mb-4 text-sm font-bold">
        Forgot password?
      </a>
      <SubmitButton name="Sign In" />
      <BorderButton />
    </form>
  );
};

export default FormSignIn;
