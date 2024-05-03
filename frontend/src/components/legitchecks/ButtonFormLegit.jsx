import { getAccessToken } from '../../utils/token-utilities';

const ButtonFormLegit = () => {
  const isUserLoggedIn = !!getAccessToken();

  return (
    <>
      {/* Desktop button */}
      <div className="hidden sm:flex bg-black dark:bg-white border border-black px-5 justify-center min-w-[175px]">
        {isUserLoggedIn ? (
          <a
            href="/user/legit-check-form"
            className="flex items-center gap-3 text-white dark:text-black"
          >
            <p className="text-xl uppercase">Legit Check</p>
            <p className="text-4xl">+</p>
          </a>
        ) : (
          <a
            href="/auth/sign-in"
            className="flex items-center gap-3 text-white dark:text-black"
          >
            <p className="text-xl uppercase">Legit Check</p>
            <p className="text-4xl">+</p>
          </a>
        )}
      </div>
      {/* Mobile floating button */}
      <div className="fixed flex items-center justify-center w-24 h-24 p-3 bg-black border border-black rounded-full shadow-lg sm:hidden bottom-8 right-8 dark:bg-white">
        {isUserLoggedIn ? (
          <a
            href="/user/legit-check-form"
            className="flex items-center justify-center text-white dark:text-black"
          >
            <p className="text-6xl">+</p>
          </a>
        ) : (
          <a
            href="/auth/sign-in"
            className="flex items-center justify-center text-white dark:text-black"
          >
            <p className="text-6xl">+</p>
          </a>
        )}
      </div>
    </>
  );
};

export default ButtonFormLegit;
