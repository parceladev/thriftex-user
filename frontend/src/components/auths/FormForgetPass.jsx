import { useState } from 'react';
import InputEmail from './InputEmail';
import SubmitButton from './SubmitButton';
import BorderButton from './BorderButton';
import Modal from './Modal';

const FormForgetPass = () => {
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 sm:p-12 p-9 w-full rounded-2xl text-white bg-white/35 sm:w-[475px]"
    >
      <div className="flex flex-col gap-3 px-5 text-center text-white">
        <h3 className="text-2xl font-bold">Trouble logging in?</h3>
        <p className="text-md">
          Enter your email and we’ll send you a link to get back into your
          account
        </p>
      </div>
      <InputEmail value={email} onChange="" placeholder="Your Email" />
      <SubmitButton name="Send Login Link" />
      <BorderButton name="Login with different account" icon="hidden" />

      <Modal
        title="Email Sent"
        description="We sent an email to a********n@gmail.com with a link to reset the password."
        button="Close"
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </form>
  );
};

export default FormForgetPass;
