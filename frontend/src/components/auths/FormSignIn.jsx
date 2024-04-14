import { useState } from 'react';
import InputPassword from './InputPassword';
import InputEmail from './InputEmail';
import SubmitButton from './SubmitButton';
import BorderButton from './BorderButton';

const FormSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('{{base_api}}/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.status) {
        // Handle success
        console.log('Login Berhasil!', data);
      } else {
        // Handle errors or unsuccessful logins
        console.log('Login Gagal:', data.message);
      }
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <div className="flex flex-col gap-5 sm:p-12 p-9 rounded-2xl text-white bg-white/35 w-full sm:w-[475px]">
      <a href="" className="flex justify-center mb-4">
        <img src="/src/assets/auth/form-logo.png" alt="" />
      </a>
      <a href="" className="mb-4 text-sm font-bold">
        Forgot password?
      </a>
      <InputEmail value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputPassword
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Your Password"
      />
      <SubmitButton name="Sign In" onClick={handleSubmit} />
      <BorderButton />
    </div>
  );
};

export default FormSignIn;
