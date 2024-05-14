import { useState, useEffect } from "react";
import PersonalForm from "./PersonalForm";
import SecurityForm from "./SecurityForm";
import LogOut from "./LogOut";
import MyLegit from "./MyLegit";
import updateProfile from "../../utils/profile-api-service";
import { decodeToken, getAccessToken } from "../../utils/token-utilities";
import { useTranslation } from "react-i18next";

const AccountSettings = () => {
  const { t } = useTranslation();
  const [userData, setUserData] = useState({
    photo: "",
    username: "",
    name: "",
    phoneNumber: "",
    gender: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      const decoded = decodeToken(token);
      if (decoded) {
        setUserData({
          photo: decoded.foto || "",
          username: decoded.username || "",
          name: decoded.nama || "",
          phoneNumber: decoded.no_hp || "",
          gender: decoded.jenis_kelamin || "",
          email: decoded.email || "",
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        });
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, type, value } = e.target;
    if (type === "file") {
      const file = e.target.files[0];
      setUserData((prevState) => ({
        ...prevState,
        [name]: file,
      }));
    } else {
      setUserData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      userData.newPassword ||
      userData.confirmNewPassword ||
      userData.oldPassword
    ) {
      if (!userData.oldPassword) {
        alert (`${t("Please enter your old password.")}`);
        return;
      }
      if (userData.newPassword.length < 8) {
        alert(`${t("New password must be at least 8 characters long.")}`);
        return;
      }
      if (userData.newPassword !== userData.confirmNewPassword) {
        alert(`${t("New passwords do not match.")}`);
        return;
      }
    }

    const updatedUserData = {
      foto: userData.photo,
      username: userData.username,
      nama: userData.name,
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
        setUserData({
          ...userData,
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        });
        alert(`${t("Profile updated successfully!")}`);
        window.location.reload();
      } else {
        const message =
          result.message || `${t("Failed to update profile. Please try again.")}`;
        alert(message);
      }
    } catch (error) {
      console.error("Error during profile update:", error);
    }
  };

  return (
    <section className="flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <div className="flex flex-col w-full gap-16 sm:flex-row">
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
          className="self-end w-full px-6 py-4 rounded-md mt-14 sm:mt-5 sm:w-fit bg-secondary text-textWhite dark:bg-primary dark:text-textBlack"
        >
          <p className="text-lg">{t("Settings Save")}</p>
        </button>
      </form>
      <div className="mt-28 sm:mt-14">
        <div className="border-2 border-l-0 border-r-0 border-gray-300 dark:border-[#555555] rounded hover:bg-gray-200 dark:hover:bg-[#0f141b]">
          <MyLegit />
        </div>
        <div className="mt-4 border-2 border-l-0 border-r-0 border-gray-300 dark:border-[#555555] rounded hover:bg-gray-200 dark:hover:bg-[#0f141b]">
          <LogOut />
        </div>
      </div>
    </section>
  );
};

export default AccountSettings;
