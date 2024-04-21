import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = 'http://localhost/rest.thriftex/api';

// Menyimpan token dan refresh token
const saveToken = (accessToken, refreshToken) => {
  Cookies.set('access_token', accessToken, {
    expires: 1,
    secure: true,
    sameSite: 'Strict',
  });
  Cookies.set('refresh_token', refreshToken, {
    expires: 30,
    secure: true,
    sameSite: 'Strict',
  });
};

// Mendapatkan token
const getAccessToken = () => Cookies.get('access_token');

// Mendapatkan refresh token
const getRefreshToken = () => Cookies.get('refresh_token');

// Menghapus token dan refresh token
const deleteToken = () => {
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
};

// Mendecode token JWT
const decodeToken = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%'.concat(('00' + c.charCodeAt(0).toString(16)).slice(-2)))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

const refreshToken = async () => {
  const currentRefreshToken = getRefreshToken();
  if (!currentRefreshToken) {
    console.error('No refresh token available.');
    return false;
  }

  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/refresh_token`,
      {
        refreshToken: currentRefreshToken,
      },
      {
        timeout: 5000, 
      }
    );

    const { data } = response;
    if (data.status) {
      saveToken(data.accessToken, data.refreshToken);
      return true;
    } else {
      // Only delete tokens if explicitly stated by the server, e.g., token is invalid
      if (data.tokenInvalid) {
        deleteToken();
      }
      return false;
    }
  } catch (error) {
    console.error('Error refreshing token:', error);
    // Consider not deleting the token here unless you're sure it's invalid
    return false;
  }
};

// Validasi token saat ini
const validateToken = async () => {
  const token = getAccessToken();
  if (!token) {
    return { valid: false };
  }

  try {
    const decoded = decodeToken(token);
    const now = Date.now() / 1000;
    // Periksa apakah token akan kedaluwarsa dalam waktu kurang dari 1 menit
    if (decoded.exp < now + 60) {
      // Jika akan kedaluwarsa, coba perbarui
      const isRefreshed = await refreshToken();
      if (isRefreshed) {
        // Jika berhasil diperbarui, ambil token yang baru
        const newToken = getAccessToken();
        const newDecoded = decodeToken(newToken);
        return { valid: true, decoded: newDecoded };
      } else {
        return { valid: false };
      }
    }
    // Jika token masih berlaku, kembalikan true
    return { valid: true, decoded };
  } catch (error) {
    console.error('Token validation error:', error);
    deleteToken();
    return { valid: false };
  }
};

export {
  saveToken,
  getAccessToken,
  getRefreshToken,
  deleteToken,
  decodeToken,
  validateToken,
  refreshToken,
};
