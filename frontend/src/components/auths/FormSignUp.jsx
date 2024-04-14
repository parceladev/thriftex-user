import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import InputPassword from './InputPassword';
import InputEmail from './InputEmail';
import SubmitButton from './SubmitButton';
import BorderButton from './BorderButton';

const FormSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      // Create an instance of FormData
      const formData = new FormData();
      formData.append('nama', name); // Make sure to use 'nama' if that's the correct field name expected by your API
      formData.append('email', email);
      formData.append('password', password);
      formData.append('passconf', confirmPassword);
      formData.append('role', 'user');

      const response = await axios.post(
        'http://localhost/rest.thriftex/api/users/register',
        formData
      );
      const data = response.data; // With axios, you directly get `data` without needing to call `.json()`

      if (data.status) {
        // Handle success
        console.log('Registration Successful', data);
        navigate('/auth/sign-in');
      } else {
        // Handle errors or unsuccessful registration
        console.log('Registration Failed:', data.message);
      }
    } catch (error) {
      console.error(
        'Registration Error:',
        error.response ? error.response.data : error
      );
    }
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
        className="text-black p-3"
      />
      <InputEmail value={email} onChange={(e) => setEmail(e.target.value)} />
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
      <SubmitButton name="Sign Up" onClick={handleSubmit} />
      <BorderButton />
    </div>
  );
};

export default FormSignUp;
