import styles from './../../styles';

const ButtonFormLegit = () => {
  return (
    <div
      className={`${styles.flexCenter} bg-black dark:bg-white border border-black px-5`}
    >
      <a
        href="/user/legit-check-form"
        className={`${styles.flexCenter} text-white dark:text-black`}
      >
        <p className="uppercase text-xl w-32">Legit Check</p>
        <p className="text-4xl">+</p>
      </a>
    </div>
  );
};

export default ButtonFormLegit;
