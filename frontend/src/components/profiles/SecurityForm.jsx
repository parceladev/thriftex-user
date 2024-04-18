import { useState, useEffect } from 'react';
import { decodeToken, getToken } from '../../utils/TokenUtilities';
import InputForm from './InputForm';

const SecurityForm = () => {
  const [userData, setUserData] = useState({
    email: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [showChangePassword, setShowChangePassword] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      const decoded = decodeToken(token);
      if (decoded) {
        setUserData((prevUserData) => ({
          ...prevUserData,
          email: decoded.email || '',
        }));
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

  const toggleChangePassword = () => {
    setShowChangePassword(!showChangePassword);
  };

  return (
    <form action="" className="flex flex-col w-full gap-5">
      <h1 className="mb-8 text-2xl font-semibold">Security</h1>
      <InputForm
        label="Email"
        type="email"
        name="email"
        id="email"
        htmlFor="email"
        placeholder="Your Email"
        isRequired="none"
        value={userData.email}
        readOnly={true}
        className="bg-gray-100"
      />
      {!showChangePassword && (
        <InputForm
          label="Password"
          type="password"
          name="password"
          id="password"
          htmlFor="password"
          placeholder="Your Password"
          isRequired="none"
          value={userData.oldPassword}
          onChange={handleInputChange}
          readOnly={false}
        />
      )}
      {showChangePassword && (
        <>
          <InputForm
            label="Old Password"
            type="password"
            name="oldPassword"
            id="old-password"
            htmlFor="old-password"
            placeholder="Old Your Password"
            isRequired="required"
            value={userData.oldPassword}
            onChange={handleInputChange}
            readOnly={false}
          />
          <InputForm
            label="New Password"
            type="password"
            name="newPassword"
            id="new-password"
            htmlFor="new-password"
            placeholder="Your New Password"
            isRequired="required"
            value={userData.newPassword}
            onChange={handleInputChange}
            readOnly={false}
          />
          <InputForm
            label="Confirm New Password"
            type="password"
            name="newConfirmPassword"
            id="confirm-new-password"
            htmlFor="confirm-new-password"
            placeholder="Confirm Your New Password"
            isRequired="required"
            value={userData.newConfirmPassword}
            onChange={handleInputChange}
            readOnly={false}
          />
          <button
            onClick={toggleChangePassword}
            type="button"
            className="px-4 w-fit py-2 text-lg text-gray-600 bg-white border rounded-sm hover:bg-gray-100"
          >
            Cancel
          </button>
        </>
      )}
      {!showChangePassword && (
        <a
          href="#"
          onClick={toggleChangePassword}
          className="px-4 py-3 text-lg text-white rounded-sm bg-secondary w-fit"
        >
          Change Password
        </a>
      )}
    </form>
  );
};

export default SecurityForm;
