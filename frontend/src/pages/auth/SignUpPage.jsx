import FormSignUp from "./../../components/auths/FormSignUp";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const SignUpPage = () => {
  const { t, i18n } = useTranslation();
  const title = t("Have any account?");

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("i18nextLng", language);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng") || "en";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full min-h-screen gap-10"
      style={{
        backgroundImage: "url('/src/assets/auth/bg-img-auth.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center w-full px-8">
        <div className="flex gap-3 py-8 text-white">
          <img src="../../../public/icons/globe-icon.svg" alt="globe-icon" />
          <select
            className="text-white bg-transparent"
            onChange={(e) => handleLanguageChange(e.target.value)}
            value={i18n.language}
          >
            <option className="text-black" value="en">
              EN
            </option>
            <option className="text-black" value="id">
              ID
            </option>
          </select>
        </div>
        <FormSignUp />
        <div className="flex gap-1 py-8 text-white">
          <p>{title}</p>
          <a href="/auth/sign-in" className="font-bold">
            {t("Sign In")}
          </a>
        </div>
      </div>
      <footer className="w-full">
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

export default SignUpPage;
