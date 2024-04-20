import PersonalForm from './PersonalForm';
import SecurityForm from './SecurityForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import LogOut from './LogOut';
import updateProfile from './../../utils/profile-api-service';
import { useState, useEffect } from 'react';
import { decodeToken, getToken } from '../../utils/TokenUtilities';

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
    const token = getToken();
    if (token) {
      const decoded = decodeToken(token);
      if (decoded) {
        setUserData((prevUserData) => {
          if (
            prevUserData.username !== decoded.username ||
            prevUserData.name !== decoded.nama ||
            prevUserData.phoneNumber !== decoded.no_hp ||
            prevUserData.gender !== decoded.jenis_kelamin ||
            prevUserData.email !== decoded.email
          ) {
            return {
              username: decoded.username || '',
              name: decoded.nama || '',
              phoneNumber: decoded.no_hp || '',
              gender: decoded.jenis_kelamin || '',
              email: decoded.email || '',
            };
          }
          return prevUserData;
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
      await updateProfile({
        nama: userData.name,
        username: userData.username,
        no_hp: userData.phoneNumber,
        jenis_kelamin: userData.gender,
        email: userData.email,
        old_password: userData.oldPassword,
        password: userData.newPassword,
        passconf: userData.confirmNewPassword,
      });
    } catch (error) {
      console.log(error);
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
        <div>
          <LogOut />
        </div>
      </div>
    </section>
  );
};

export default AccountSettings;
