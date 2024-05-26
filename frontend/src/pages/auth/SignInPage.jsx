import { useEffect } from 'react';
import FormSignIn from './../../components/auths/FormSignIn';
import { useTranslation } from 'react-i18next';

const SignInPage = () => {
  const { t, i18n } = useTranslation();
  const title = t("Don't have any account?");

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full min-h-screen gap-8"
      style={{
        backgroundImage: "url('../../public/auth/maksym.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col items-center w-full px-8">
        <div className="flex gap-3 py-8 text-white">
          <img src="../../../public/icons/globe-icon.svg" alt="globe-icon" />
          <select
            className="text-white bg-transparent"
            onChange={(e) => handleLanguageChange(e.target.value)}
            value={i18n.language} // This line will ensure the selected language remains after refresh
          >
            <option className="text-black" value="en">
              EN
            </option>
            <option className="text-black" value="id">
              ID
            </option>
          </select>
        </div>
        <FormSignIn />
        <div className="flex gap-1 py-8 text-white">
          <p>{title}</p>
          <a href="/auth/sign-up" className="font-bold">
            {t('Sign Up')}
          </a>
        </div>
      </div>
      <footer className="w-full">
        {/* <div className="flex justify-center gap-16 py-3 text-sm text-center text-white uppercase border border-gray-400 sm:text-xs sm:justify-start px-9">
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Terms Of Condition</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </div> */}
        <div className="flex items-center justify-between w-full py-3 px-9">
          <div className="flex h-4 gap-5">
            <img
              src="../../../public/icons/instagram-icon.svg"
              alt="instagram-icon"
            />
            <img src="../../../public/icons/meta-icon.svg" alt="meta-icon" />
            <img
              src="../../../public/icons/youtube-icon.svg"
              alt="youtube-icon"
            />
            <img
              src="../../../public/icons/xtwitter-icon.svg"
              alt="youtube-icon"
            />
          </div>
          <div className="text-white">
            <p>&copy; 2024 VERIFEX</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;
