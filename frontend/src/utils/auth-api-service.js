import axios from 'axios';
import { saveToken, validateToken } from './token-utilities';

const API_BASE_URL = 'http://localhost/rest.thriftex/api';

export const signUp = async (userData, onSuccess, onError) => {
  const formData = new FormData();
  Object.keys(userData).forEach((key) => {
    formData.append(key, userData[key]);
  });

  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/register`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );

    const data = response.data;
    if (data.status) {
      onSuccess();
    } else {
      onError(data.message);
    }
  } catch (error) {
    console.error('Registration Error:', error);
    onError('Registration failed. Please try again.');
  }
};

export const signIn = async (email, password, setError, navigate) => {
  try {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const response = await axios.post(`${API_BASE_URL}/users/login`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    const data = response.data;
    if (data.status) {
      if (!data.token) {
        console.error('Token is undefined or null.');
        setError('No token received');
      } else {
        saveToken(data.token);
        const validation = validateToken(data.token);
        if (validation.valid) {
          navigate('/user/home');
        } else {
          setError('Invalid or expired token');
        }
      }
    } else {
      if (data.message.includes('Incorrect password')) {
        setError('The password you entered is incorrect.');
      } else if (data.message.includes('User not found')) {
        setError('No account associated with this email.');
      } else {
        setError(data.message);
      }
    }
  } catch (error) {
    console.error('Login Error:', error);
    setError('Login failed. Please try again.');
  }
};
