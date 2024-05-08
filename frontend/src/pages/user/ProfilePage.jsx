import AccountSettings from './../../components/profiles/AccountSettings';

const ProfilePage = () => {
  return (
    <div className="px-6 mt-20 sm:mt-52 sm:px-16 sm:mb-16">
      <div className="w-full p-6 border dark:border-[#555555] rounded shadow-md sm:p-16">
        <AccountSettings />
      </div>
    </div>
  );
};

export default ProfilePage;
