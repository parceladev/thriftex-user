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
