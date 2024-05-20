import { useState } from 'react';
import { fetchContactEmail } from './../../utils/email-api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid =
    name.trim() !== '' && email.trim() !== '' && message.trim() !== '';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setError('Please fill in all required fields.');
      return;
    }

    const formData = new FormData();
    formData.append('nama', name);
    formData.append('email', email);
    formData.append('pesan', message);

    if (phoneNumber) {
      formData.append('no_tlp', phoneNumber);
    }

    setIsSubmitting(true);

    try {
      const response = await fetchContactEmail(formData);

      if (response) {
        setIsSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
        setPhoneNumber('');
        setError('');

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full mb-10 md:flex-1">
      <h2 className="mb-6 text-xl font-semibold">{t("Heading Contact")}</h2>
      {isSuccess && (
        <div className="px-4 py-2 mb-4 text-secondary dark:text-primary dark:bg-slate-800  bg-gray-200 rounded">
          {t("Div Success")}
        </div>
      )}
      {error && (
        <div className="px-4 py-2 mb-4 text-red-800 bg-red-200 rounded">
          {error}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="max-w-[700px] flex flex-col space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="flex items-center gap-1 mb-2 text-sm font-semibold"
          >
            {t("Label Contact 1")} <span className="text-xs text-red-400">{t("Required")}</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder={t("PlaceHolder Contact 1")}
            className="w-full py-2 pl-3 bg-transparent border-0 border-b-2 border-gray-800 outline-none dark:border-primary focus:ring-0 focus:border-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="flex items-center gap-1 mb-2 text-sm font-semibold"
          >
            {t("Label Contact 2")} <span className="text-xs text-red-400">{t("Required")}</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder={t("PlaceHolder Contact 2")}
            className="w-full py-2 pl-3 bg-transparent border-0 border-b-2 border-gray-800 outline-none dark:border-primary focus:ring-0 focus:border-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="flex items-center gap-1 mb-2 text-sm font-semibold"
          >
            {t("Label Contact 3")} 
            <span className="text-xs text-gray-400">{t("Optional")}</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            placeholder={t("PlaceHolder Contact 3")}
            className="w-full py-2 pl-3 bg-transparent border-0 border-b-2 border-gray-800 outline-none dark:border-primary focus:ring-0 focus:border-black"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="flex items-center gap-1 mb-2 text-sm font-semibold"
          >
            {t("Label Contact 4")} <span className="text-xs text-red-400">{t("Required")}</span>
          </label>
          <textarea
            id="message"
            placeholder={t("PlaceHolder Contact 4")}
            className="w-full py-2 pl-3 bg-transparent border-0 border-b-2 border-gray-700 outline-none dark:border-primary focus:ring-0 focus:border-secondary dark:focus:border-primary"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`w-full flex gap-4 items-center justify-center font-semibold py-2 transition-colors duration-200 transform rounded-md focus:outline-none ${
            isFormValid
              ? 'bg-secondary text-textWhite dark:bg-primary dark:text-textBlack hover:bg-gray-700 focus:bg-gray-700'
              : 'bg-gray-300 text-gray-500  cursor-not-allowed'
          }`}
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting && <FontAwesomeIcon icon={faCircleNotch} spin />}
          <span>{isSubmitting ? t("Submit Contact 1") : t("Submit Contact 2")}</span>
        </button>
      </form>
      <div className="mt-16 text-sm">
        <p className="mb-3 font-semibold">{t("Paraf Contact 1")}</p>
        <p className="">thriftexcs@gmail.com</p>
        <p className="mt-8 mb-3 font-semibold">
        {t("Paraf Contact 2")}
        </p>
        <p className="mb-3">{t("Paraf Contact 3")}</p>
        <p>{t("Paraf Contact 4")}</p>
      </div>
    </div>
  );
};

export default ContactUs;
