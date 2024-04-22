import InputForm from './InputForm';
import { PropTypes } from 'prop-types';

const PersonalForm = (props) => {
  const { userData, handleInputChange } = props;

  return (
    <div className="flex flex-col w-full gap-5">
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
    </div>
  );
};

PersonalForm.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    gender: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default PersonalForm;
