import axios from 'axios';
import {
  getAccessToken,
  refreshToken,
  decodeToken,
  saveToken,
} from './token-utilities';

const API_BASE_URL = 'http://localhost/rest.thriftex/api';

const updateProfile = async (userData) => {
  const tokenValid = await refreshToken();
  if (!tokenValid) {
    alert('Session has expired. Please log in again.');
    return { success: false, message: 'Session expired' };
  }

  const token = getAccessToken();
  if (!token) {
    alert('You are not logged in. Please log in and try again.');
    return { success: false, message: 'Not logged in' };
  }

  const formData = new FormData();
  Object.keys(userData).forEach((key) => {
    formData.append(key, userData[key]);
  });

  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/updateuserprofile`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.status === true) {
      alert('Profile updated successfully!');

      // Jika API mengembalikan token baru setelah pembaruan, simpan token tersebut
      if (response.data.token) {
        saveToken(response.data.token);
      }

      // Decode token terbaru untuk mendapatkan data pengguna yang baru
      const decoded = decodeToken(response.data.token || token);
      return { success: true, user: decoded };
    } else {
      alert(`Failed to update profile: ${response.data.message}`);
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    console.error('Error updating profile:', error);
    alert(
      'Error updating profile. Please check your connection and try again.'
    );
    return { success: false, error };
  }
};

export default updateProfile;
