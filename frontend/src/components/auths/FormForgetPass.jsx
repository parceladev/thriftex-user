import { useState } from 'react';

import InputEmail from './InputEmail';
import SubmitButton from './SubmitButton';
import BorderButton from './BorderButton';
import Modal from './Modal';

import { forgetPassword } from '../../utils/auth-api-service';

const FormForgetPass = () => {
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    description: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await forgetPassword(email);
    console.log(response);
    setLoading(false);
    if (response === 'success') {
      setModalContent({
        title: 'Email Sent',
        description: `We sent an email to ${email} with a link to reset the password.`,
      });
      setShowModal(true);
    } else {
      setModalContent({
        title: 'Error',
        description: response.error || 'An unexpected error occurred',
      });
      setShowModal(true);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
      <InputEmail
        value={email}
        onChange={handleEmailChange}
        placeholder="Your Email"
      />
      <SubmitButton
        name={loading ? 'Send Reset Link' : 'Send Reset Link'}
        loading={loading}
      />
      <BorderButton name="Login with different account" icon="hidden" />

      <Modal
        title={modalContent.title}
        description={modalContent.description}
        button="Close"
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </form>
  );
};

export default FormForgetPass;
