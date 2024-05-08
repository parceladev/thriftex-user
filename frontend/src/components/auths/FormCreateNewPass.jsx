import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from './Modal';
import InputPassword from './InputPassword';
import SubmitButton from './SubmitButton';

const FormCreateNewPass = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleNavigate = () => {
    navigate('/auth/sign-in');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 sm:p-12 p-9 w-full rounded-2xl text-white bg-white/35 sm:w-[475px]"
    >
      <div className="flex flex-col gap-12 px-8 text-center text-white">
        <h3 className="text-2xl font-bold">Changes Authentication</h3>
        <p>Make sure to create difficult passwords and store them safely</p>
      </div>
      <InputPassword value="" onChange="" placeholder="New Password" />
      <InputPassword value="" onChange="" placeholder="Confirm Password" />
      <SubmitButton name="Change Password" />

      <Modal
        title="Password changed!"
        description="The password has been successfully changed, Now you can log in using the same email with the new password."
        onNavigate={handleNavigate}
        button="Sign in"
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </form>
  );
};

export default FormCreateNewPass;
