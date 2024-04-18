import { useState, useEffect } from 'react';
import { decodeToken, getToken } from '../../utils/TokenUtilities';
import InputForm from './InputForm';
import updateProfile from './../../utils/profile-api-service';

const PersonalForm = () => {
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    phoneNumber: '',
    gender: '',
  });

  useEffect(() => {
    const token = getToken();
    if (token) {
      const decoded = decodeToken(token);
      if (decoded) {
        setUserData((prevUserData) => {
          // Cek jika data yang didapat dari token berbeda dari state saat ini
          if (
            prevUserData.username !== decoded.username ||
            prevUserData.name !== decoded.nama ||
            prevUserData.phoneNumber !== decoded.no_hp ||
            prevUserData.gender !== decoded.jenis_kelamin
          ) {
            return {
              username: decoded.username || '',
              name: decoded.nama || '',
              phoneNumber: decoded.no_hp || '',
              gender: decoded.jenis_kelamin || '',
            };
          }
          return prevUserData; // Jika tidak ada perubahan, kembalikan state yang lama
        });
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateProfile(userData);
    } catch (error) {
      alert('Failed to update profile.');
      console.error('Profile update error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5">
      <h1 className="mb-8 text-2xl font-semibold">Personal Information</h1>
      <div className="flex items-center justify-center w-20 h-20 border-2 border-black rounded-full bg-slate-300">
        <img
          src="../../../public/icons/header/alif-lakipadada-profile.png"
          alt=""
          className="w-full h-full bg-cover "
        />
      </div>
      <InputForm
        label="Username"
        name="username"
        type="text"
        id="username"
        htmlFor="username"
        placeholder="Username"
        isRequired="optional"
        value={userData.username}
        onChange={handleInputChange}
        readOnly={false}
      />
      <InputForm
        label="Name"
        name="name"
        type="text"
        id="name"
        htmlFor="name"
        placeholder="Your Name"
        isRequired="optional"
        value={userData.name}
        onChange={handleInputChange}
        readOnly={false}
      />
      <InputForm
        label="Phone Number"
        name="phoneNumber"
        type="tel"
        id="phone-number"
        htmlFor="phone-number"
        placeholder="Example: 081234567890"
        isRequired="optional"
        value={userData.phoneNumber}
        onChange={handleInputChange}
        readOnly={false}
      />
      <InputForm
        label="Gender"
        name="gender"
        type="select"
        id="gender"
        htmlFor="gender"
        isRequired="optional"
        value={userData.gender}
        onChange={handleInputChange}
        readOnly={false}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </InputForm>
    </form>
  );
};

export default PersonalForm;
