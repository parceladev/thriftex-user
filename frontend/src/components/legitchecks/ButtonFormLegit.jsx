import { getAccessToken } from '../../utils/token-utilities';

const ButtonFormLegit = () => {
  const isUserLoggedIn = !!getAccessToken();

  return (
    <div
      className={`bg-black hidden sm:flex dark:bg-white border border-black px-5`}
    >
      <div className="flex justify-center min-w-[150px]">
        {isUserLoggedIn ? (
          <a
            href="/user/legit-check-form"
            className={`text-white dark:text-black flex gap-3 items-center`}
          >
            <p className="text-xl uppercase">Legit Check</p>
            <p className="text-4xl">+</p>
          </a>
        ) : (
          <a
            href="/auth/sign-in"
            className={`text-white dark:text-black flex gap-3 items-center`}
          >
            <p className="text-xl uppercase">Legit Check</p>
            <p className="text-4xl">+</p>
          </a>
        )}
      </div>
    </div>
  );
};

export default ButtonFormLegit;
