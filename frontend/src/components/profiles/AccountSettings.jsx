import PersonalForm from './PersonalForm';
import SecurityForm from './SecurityForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import LogOut from './LogOut';

const AccountSettings = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col w-full">
        <div className="flex w-full gap-16">
          <PersonalForm />
          <SecurityForm />
        </div>
        <button className="self-end p-4 mt-5 rounded-md w-fit bg-secondary">
          <FontAwesomeIcon
            icon={faFloppyDisk}
            className="text-4xl text-white"
          />
        </button>
      </div>
      <div>
        <div>
          <LogOut/>
        </div>
      </div>
    </section>
  );
};

export default AccountSettings;
