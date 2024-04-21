import { useState, useEffect } from 'react';
import PersonalForm from './PersonalForm';
import SecurityForm from './SecurityForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import LogOut from './LogOut';
import updateProfile from '../../utils/profile-api-service';
import { decodeToken, getAccessToken } from '../../utils/token-utilities';

const AccountSettings = () => {
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    phoneNumber: '',
    gender: '',
    email: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      const decoded = decodeToken(token);
      console.log(decoded);
      if (decoded) {
        setUserData({
          username: decoded.username || '',
          name: decoded.nama || '',
          phoneNumber: decoded.no_hp || '',
          gender: decoded.jenis_kelamin || '',
          email: decoded.email || '',
          oldPassword: '',
          newPassword: '',
          confirmNewPassword: '',
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
    const updatedUserData = {
      nama: userData.name,
      username: userData.username,
      no_hp: userData.phoneNumber,
      jenis_kelamin: userData.gender,
      email: userData.email,
      old_password: userData.oldPassword,
      password: userData.newPassword,
      passconf: userData.confirmNewPassword,
    };

    try {
      const result = await updateProfile(updatedUserData);
      if (result.success) {
        setUserData(result.user);
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

  return (
    <section className="flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <div className="flex w-full gap-16">
          <PersonalForm
            userData={userData}
            handleInputChange={handleInputChange}
          />
          <SecurityForm
            userData={userData}
            handleInputChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="self-end p-4 mt-5 rounded-md w-fit bg-secondary"
        >
          <FontAwesomeIcon
            icon={faFloppyDisk}
            className="text-4xl text-white"
          />
        </button>
      </form>
      <div>
        <LogOut />
      </div>
    </section>
  );
};

export default AccountSettings;
