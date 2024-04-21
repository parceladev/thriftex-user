import axios from 'axios';
import { getToken } from './token-utilities';

const API_BASE_URL = 'http://localhost/rest.thriftex/api';

const updateProfile = async (userData) => {
  const token = getToken();
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

    if (response.status === 200) {
      alert('Profile updated successfully!');
    } else {
      alert('Failed to update profile. Please try again.');
    }
  } catch (error) {
    console.error('Error updating profile:', error);
    alert(
      'Error updating profile. Please check your connection and try again.'
    );
  }
};

export default updateProfile;
