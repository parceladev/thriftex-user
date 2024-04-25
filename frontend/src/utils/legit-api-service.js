import axios from 'axios';

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

export const saveLegitCheck = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/legits/savelegit`, formData);
    return response.data;
  } catch (error) {
    console.error('Error saving legit check:', error);
    throw error;
  }
};