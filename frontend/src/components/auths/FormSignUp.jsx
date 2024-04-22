import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from './../../utils/auth-api-service';

import InputPassword from './InputPassword';
import InputEmail from './InputEmail';
import SubmitButton from './SubmitButton';
import BorderButton from './BorderButton';

const FormSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('All fields must be filled.');
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return false;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
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

    const userData = {
      nama: name,
      email: email,
      password: password,
      passconf: confirmPassword,
      role: 'user',
    };

    signUp(userData, handleSuccess, handleError);
  };

  const handleSuccess = () => {
    setSuccessMessage('Registration Successful. Redirecting to sign in...');
    setTimeout(() => {
      navigate('/auth/sign-in');
    }, 3000);
  };

  const handleError = (message) => {
    setErrorMessage(message);
  };

  return (
    <div className="flex flex-col gap-5 sm:p-12 p-9 rounded-2xl text-white bg-white/35 w-full sm:w-[475px]">
      <a href="" className="flex justify-center mb-4">
        <img src="/src/assets/auth/form-logo.png" alt="" />
      </a>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="p-4 bg-[rgba(217,217,217,0.2)] placeholder-white w-full text-white rounded-md"
      />
      <InputEmail
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
      />
      <InputPassword
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Your Password"
      />
      <InputPassword
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
      />
      {errorMessage && (
        <p className="mt-2 text-center text-red-500">{errorMessage}</p>
      )}
      {successMessage && (
        <p className="mt-2 text-center text-green-500">{successMessage}</p>
      )}
      <SubmitButton name="Sign Up" onClick={handleSubmit} />
      <BorderButton />
    </div>
  );
};

export default FormSignUp;
