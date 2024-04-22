import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { deleteToken, saveToken, validateToken } from './token-utilities';

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

export const signIn = async (email, password, setError) => {
  try {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    // Mencoba sign in dan mendapatkan token
    const response = await axios.post(`${API_BASE_URL}/users/login`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    const data = response.data;
    if (data.status) {
      if (!data.access_token) {
        console.error('Token is undefined or null.');
        return { error: 'No token received' };
      } else {
        saveToken(data.access_token, data.refresh_token);

        // Validate the new token
        const validationResult = await validateToken();
        if (validationResult.valid) {
          // Token is valid, return the successful login data
          return { data };
        } else {
          return { error: 'Invalid or expired token' };
        }
      }
    } else {
      // Handle various error messages from the server
      return { error: data.message };
    }
  } catch (error) {
    console.error('Login Error:', error);
    setError('Login failed. Please try again.');
  }
};

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    deleteToken();  // Menghapus token dari penyimpanan
    navigate('/auth/sign-in');  // Navigasi ke halaman login
  };

  return logout;
};
