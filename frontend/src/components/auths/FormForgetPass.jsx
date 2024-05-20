import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import InputEmail from './InputEmail';
import SubmitButton from './SubmitButton';
import BorderButton from './BorderButton';
import Modal from './Modal';

import { forgetPassword } from '../../utils/auth-api-service';

const FormForgetPass = () => {
  const { t } = useTranslation();

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
        title: t('Email Sent'),
        description: t('We sent an email to {{email}} with a link to reset the password.', { email }),
      });
      setShowModal(true);
    } else {
      setModalContent({
        title: t('Error'),
        description: response.error || t('An unexpected error occurred'),
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
        <h3 className="text-2xl font-bold">{t('Trouble logging in?')}</h3>
        <p className="text-md">
          {t('Enter your email and we’ll send you a link to get back into your account')}
        </p>
      </div>
      <InputEmail
        value={email}
        onChange={handleEmailChange}
        placeholder={t('Your Email')}
      />
      <SubmitButton
        name={loading ? t('Sending...') : t('Send Reset Link')}
        loading={loading}
      />
      <BorderButton name={t('Login with different account')} icon="hidden" />

      <Modal
        title={modalContent.title}
        description={modalContent.description}
        button={t('Close')}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </form>
  );
};

export default FormForgetPass;
