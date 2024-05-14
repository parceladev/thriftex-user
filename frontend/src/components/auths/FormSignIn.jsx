import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signGoogle } from '../../utils/auth-api-service';

import InputPassword from './InputPassword';
import InputEmail from './InputEmail';
import SubmitButton from './SubmitButton';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const FormSignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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

  const handleGoogleSubmit = async ({ credential }) => {
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
    };
    
    const response = await signGoogle(credential);
    if (response.data) {
      handleSuccess();
    } else {
      handleError(response.error);
    }
  };

  const handleGoogleError = (error) => {
    alert('Login dengan Google gagal. Silakan coba lagi.');
    console.error('Login Error:', error);
  };

  const isFormValid = email.trim() !== '' && password.trim() !== '';
  const buttonColor = isFormValid ? 'black' : 'rgba(0, 0, 0, 0.3)';

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 sm:p-12 p-9 w-full rounded-2xl text-white bg-white/35 sm:w-[475px]"
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
      <a href="/auth/forgot-password" className="mb-4 text-sm font-bold">
        Forgot password?
      </a>
      <SubmitButton name="Sign In" buttonColor={buttonColor} />
      <div className="flex justify-center w-full">
        <GoogleOAuthProvider clientId="516243855300-ajgnmk64lo4sp73mlrubpef808lpglvc.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleGoogleSubmit}
            onError={handleGoogleError}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Login with Google
              </button>
            )}
          />
        </GoogleOAuthProvider>
      </div>
    </form>
  );
};

export default FormSignIn;
