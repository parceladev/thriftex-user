import {
  HomePage,
  LegitCheckPage,
  AboutPage,
  ProfilePage,
  LegitCheckFormPage,
} from './pages/user';
import { SignInPage, SignUpPage } from './pages/auth';

export const routes = [
  {
    title: 'User Pages',
    layout: 'UserLayout',
    pages: [
      {
        name: 'Home',
        path: '/home',
        element: <HomePage />,
      },
      {
        name: 'Legit Check',
        path: '/legit-check',
        element: <LegitCheckPage />,
      },
      {
        name: 'About',
        path: '/about',
        element: <AboutPage />,
      },
      {
        name: 'Profile',
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        name: 'Form Legit Check',
        path: '/legit-check-form',
        element: <LegitCheckFormPage />,
      },
    ],
  },
  {
    title: 'Auth Pages',
    layout: 'AuthLayout',
    pages: [
      {
        name: 'Sign In',
        path: '/sign-in',
        element: <SignInPage />,
      },
      {
        name: 'Sign Up',
        path: '/sign-up',
        element: <SignUpPage />,
      },
    ],
  },
];

export default routes;
