import { Routes, Route, Navigate } from 'react-router-dom';
import { UserLayout } from './layouts/UserLayout';
import { AuthLayout } from './layouts/AuthLayout';
import {
  HomePage,
  LegitCheckPage,
  AboutPage,
  ProfilePage,
  LegitCheckFormPage,
  ContactUsPage,
  MyLegitPage,
} from './pages/user';
import {
  CreatePassPage,
  ForgetPassPage,
  SignInPage,
  SignUpPage,
} from './pages/auth';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/user/home" replace />} />
      <Route path="/user/*" element={<UserLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="legit-check" element={<LegitCheckPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="profile"
          element={<PrivateRoute element={<ProfilePage />} />}
        />
        <Route
          path="my-legit"
          element={<PrivateRoute element={<MyLegitPage />} />}
        />
        <Route
          path="legit-check-form"
          element={<PrivateRoute element={<LegitCheckFormPage />} />}
        />
        <Route path="contact-us" element={<ContactUsPage />} />
      </Route>
      <Route path="/auth/*" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="forgot-password" element={<ForgetPassPage />} />
        <Route path="create-password/:token" element={<CreatePassPage />} />
      </Route>
    </Routes>
  );
}

export default App;
