import axios from 'axios';
import { deleteToken, getAccessToken } from './token-utilities';

const API_BASE_URL = 'http://localhost/rest.thriftex/api';

export const fetchTotalLegitChecks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/legits/totallegit`);
    return response.data;
  } catch (error) {
    console.error('Error fetching total legit checks:', error);
    return null;
  }
};

export const fetchLegitPublish = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/legits/legitpublish`);
    return response.data;
  } catch (error) {
    console.error('Error fetching legit publish data:', error);
    throw error;
  }
};

export const fetchMyLegit = async (navigate) => {
  const token = getAccessToken();
  if (!token) {
    alert('You are not logged in. Please log in and try again.');
    deleteToken();
    navigate('/user/auth');
    return { success: false, message: 'Not logged in' };
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/legits/data`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `${token}`,
      },
    });

    const datas = response.data;

    return datas;
  } catch (error) {
    console.error('Error fetching legit publish data:', error);
    throw error;
  }
};

export const fetchDetailMyLegit = async (case_code) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/legits/datadetail`, {
      params: { case_code },
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const datas = response.data;
    console.log("datas",datas)

    return datas;
  } catch (error) {
    console.error('Error fetching legit publish data:', error);
    throw error;
  }
};

export const saveLegitCheck = async (formData, navigate) => {
  const token = getAccessToken();
  if (!token) {
    alert('You are not logged in. Please log in and try again.');
    deleteToken();
    navigate('/user/auth');

    return { success: false, message: 'Not logged in' };
  }

  try {
    const response = await axios.post(
      `${API_BASE_URL}/legits/savelegit`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      alert("Image formats are not permitted, please use jpg, jpeg, or png image formats")
      // alert("error response data",error.response.data);
    } else if (error.request) {
      alert("error request",error.request);
    } else {
      alert('Error message',  error.message);
    }
    alert('Failed to send a legit product!');
    throw error;
  }
};
