import AccountSettings from './../../components/profiles/AccountSettings';

const ProfilePage = () => {
  return (
    <div className="px-6 mt-20 sm:mt-44 sm:px-16 sm:mb-10">
      <div className="w-full p-6 border rounded shadow-md sm:p-16 bg-primary">
        <AccountSettings />
      </div>
    </div>
  );
};

export default ProfilePage;
