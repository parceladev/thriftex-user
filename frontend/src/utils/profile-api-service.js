import axios from 'axios';
import { getToken } from './TokenUtilities';

const updateProfile = async (userData) => {
  const token = getToken();
  const formData = new FormData();

  // Menambahkan semua properti userData ke formData
  Object.keys(userData).forEach((key) => {
    formData.append(key, userData[key]);
  });

  try {
    const response = await axios.put(
      'https://your-api-url.com/updateProfile',
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
      // Lakukan tindakan lain jika diperlukan, misal redirect atau update UI
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
