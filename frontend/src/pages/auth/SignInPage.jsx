import FormSignIn from './../../components/auths/FormSignIn';

const SignInPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full min-h-screen gap-10"
      style={{
        backgroundImage: "url('/src/assets/auth/bg-img-auth.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col items-center p-8">
        <div className="flex gap-3 py-8 text-white">
          <img src="../../../public/icons/globe-icon.svg" alt="globe-icon" />
          <select className="bg-transparent">
            <option value="">English</option>
            <option value="">Indonesia</option>
          </select>
        </div>
        <FormSignIn />
        <div className="flex gap-1 py-8 text-white">
          <p>Dont have any account?</p>
          <a href="/auth/sign-up" className="font-bold">
            Sign Up
          </a>
        </div>
      </div>
      <footer className="w-full">
        <div className="flex gap-16 py-3 text-white uppercase border border-gray-400 px-9">
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Terms Of Condition</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </div>
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
              src="../../../public/icons/youtube-icon.svg"
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
