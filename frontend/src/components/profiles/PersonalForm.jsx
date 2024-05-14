import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import InputForm from "./InputForm";

const PersonalForm = (props) => {
  const { t } = useTranslation();
  const { userData, handleInputChange } = props;

  return (
    <div className="flex flex-col w-full gap-5 sm:justify-start">
      <h1 className="text-2xl font-semibold text-center sm:text-start">
        {t("Heading Personal 1")}
      </h1>
      <div className="relative flex items-center self-center justify-center w-20 h-20 border-2 border-black rounded-full cursor-pointer sm:self-start bg-slate-300">
        {userData.photo ? (
          typeof userData.photo === "object" ? (
            <img
              src={URL.createObjectURL(userData.photo)}
              alt="Pratinjau"
              className="object-cover w-full h-full rounded-full"
            />
          ) : (
            <img
              src={userData.photo}
              alt="Profil"
              className="object-cover w-full h-full rounded-full"
            />
          )
        ) : (
          <FontAwesomeIcon icon={faUser} size="2x" />
        )}
        <input
          name="photo"
          type="file"
          id="photo"
          onChange={handleInputChange}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
        <div className="absolute bottom-0 right-0 p-1 bg-white rounded-full pointer-events-none">
          <FontAwesomeIcon icon={faPenToSquare} className="text-gray-700" />
        </div>
      </div>

      <InputForm
        label={t("Label Personal 1")}
        name="username"
        type="text"
        id="username"
        htmlFor="username"
        placeholder="Username"
        isRequired="required"
        value={userData.username}
        onChange={handleInputChange}
        readOnly={false}
      />
      <InputForm
        label={t("Label Personal 2")}
        name="name"
        type="text"
        id="name"
        htmlFor="name"
        placeholder="Your Name"
        isRequired="required"
        value={userData.name}
        onChange={handleInputChange}
        readOnly={false}
      />
      <InputForm
        label={t("Label Personal 3")}
        name="phoneNumber"
        type="tel"
        id="phone-number"
        htmlFor="phone-number"
        placeholder={t("PlaceHolder Personal")}
        isRequired="optional"
        value={userData.phoneNumber}
        onChange={handleInputChange}
        readOnly={false}
      />
      <InputForm
        label={t("Label Personal 4")}
        name="gender"
        type="select"
        id="gender"
        htmlFor="gender"
        isRequired="optional"
        value={userData.gender}
        onChange={handleInputChange}
        readOnly={false}
      >
        <option value="">{t("Option Personal 1")}</option>
        <option value="male">{t("Option Personal 2")}</option>
        <option value="female">{t("Option Personal 3")}</option>
        <option value="other">{t("Option Personal 4")}</option>
      </InputForm>
    </div>
  );
};

PersonalForm.propTypes = {
  userData: PropTypes.shape({
    photo: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(File)]),
    username: PropTypes.string,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    gender: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default PersonalForm;
