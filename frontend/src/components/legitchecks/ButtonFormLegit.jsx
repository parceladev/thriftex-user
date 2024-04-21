import { getToken } from '../../utils/token-utilities';
import styles from './../../styles';

const ButtonFormLegit = () => {
  const isUserLoggedIn = !!getToken();

  return (
    <div
      className={`${styles.flexCenter} bg-black dark:bg-white border border-black px-5`}
    >
      <div>
        {isUserLoggedIn ? (
          <a
            href="/user/legit-check-form"
            className={`${styles.flexCenter} text-white dark:text-black`}
          >
            <p className="w-32 text-xl uppercase">Legit Check</p>
            <p className="text-4xl">+</p>
          </a>
        ) : (
          <a
            href="/auth/sign-in"
            className={`${styles.flexCenter} text-white dark:text-black`}
          >
            <p className="w-32 text-xl uppercase">Legit Check</p>
            <p className="text-4xl">+</p>
          </a>
        )}
      </div>
    </div>
  );
};

export default ButtonFormLegit;
