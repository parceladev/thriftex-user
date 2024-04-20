import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/user/HomePage';
import LegitCheckPage from '../pages/user/LegitCheckPage';
import AboutPage from '../pages/user/AboutPage';
import ProfilePage from '../pages/user/ProfilePage';
import LegitCheckFormPage from '../pages/user/LegitCheckFormPage';
import ContactUsPage  from '../pages/user/ContactUsPage';
import { Navbar, Footer } from './../components/layouts';
import routes from './../routes';
import PrivateRoute from './../utils/PrivateRoute';

export function UserLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar routes={routes} />
      {/* Elemen Routes harus berada dalam satu blok */}
      <main className="flex-grow">
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="legit-check" element={<LegitCheckPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="profile" element={<PrivateRoute element={<ProfilePage />} />} />
        <Route path="legit-check-form" element={<PrivateRoute element={<LegitCheckFormPage />} />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        {/* Tambahkan Route lain jika diperlukan */}
      </Routes>
      </main>
      <Footer routes={routes}/>
    </div>
  );
}

export default UserLayout;
