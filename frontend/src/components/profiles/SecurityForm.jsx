import { useState } from 'react';
import InputForm from './InputForm';
import { PropTypes } from 'prop-types';
import { useTranslation } from "react-i18next";

const SecurityForm = (props) => {
  const { t } = useTranslation();
  const { userData, handleInputChange } = props;
  const [showChangePassword, setShowChangePassword] = useState(false);

  const toggleChangePassword = () => {
    setShowChangePassword(!showChangePassword);
  };

  return (
    <div className="flex flex-col w-full gap-5">
      <h1 className="text-2xl font-semibold text-center sm:text-start">
        {t("Heading Security 1")}
      </h1>
      <InputForm
        label={t("Label Security 1")}
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
          label={t("Label Security 2")}
          type="password"
          name="password"
          id="password"
          htmlFor="password"
          placeholder="Your Password"
          isRequired="none"
          value="encrypted password"
          onChange={handleInputChange}
          readOnly={true}
          className="bg-gray-100"
        />
      )}
      {showChangePassword && (
        <>
          <InputForm
            label={t("Label Security 3")}
            type="password"
            name="oldPassword"
            id="old-password"
            htmlFor="old-password"
            placeholder={t("PlaceHolder Security 1")}
            isRequired="required"
            value={userData.oldPassword}
            onChange={handleInputChange}
            readOnly={false}
          />
          <InputForm
            label={t("Label Security 4")}
            type="password"
            name="newPassword"
            id="new-password"
            htmlFor="new-password"
            placeholder={t("PlaceHolder Security 2")}
            isRequired="required"
            value={userData.newPassword}
            onChange={handleInputChange}
            readOnly={false}
          />
          <InputForm
            label={t("Label Security 5")}
            type="password"
            name="confirmNewPassword"
            id="confirm-new-password"
            htmlFor="confirm-new-password"
            placeholder={t("PlaceHolder Security 3")}
            isRequired="required"
            value={userData.confirmNewPassword}
            onChange={handleInputChange}
            readOnly={false}
          />
          <button
            onClick={toggleChangePassword}
            type="button"
            className="px-4 py-2 text-lg text-gray-600 bg-white border rounded-sm w-fit hover:bg-gray-100"
          >
            {t("Button Cancel")}
          </button>
        </>
      )}
      {!showChangePassword && (
        <a
          href="#"
          onClick={toggleChangePassword}
          className="px-4 py-3 text-lg rounded-sm bg-secondary text-textWhite dark:bg-primary dark:text-textBlack w-fit"
        >
          {t("Button Change Password")}
        </a>
      )}
    </div>
  );
};

SecurityForm.propTypes = {
  userData: PropTypes.shape({
    email: PropTypes.string,
    oldPassword: PropTypes.string,
    newPassword: PropTypes.string,
    confirmNewPassword: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default SecurityForm;
