// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../../public/generals/thriftex-logo-text.jpg';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { BiGlobe } from 'react-icons/bi';
import { IoMdSunny } from 'react-icons/io';
import { getAccessToken } from '../../utils/token-utilities';
import { useTheme } from '../../ThemeContext';

const Navbar = () => {
  const { selectedTheme, setSelectedTheme } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    document.documentElement.className = theme;
  };

  console.log(selectedTheme);

  const isUserLoggedIn = getAccessToken();

  const routes = isUserLoggedIn
    ? [
        { path: '/user/home', name: 'Home' },
        { path: '/user/legit-check', name: 'Legit Check' },
        { path: '/user/about', name: 'About' },
        { path: '/user/profile', name: 'Profile' },
      ]
    : [
        { path: '/user/home', name: 'Home' },
        { path: '/user/legit-check', name: 'Legit Check' },
        { path: '/user/about', name: 'About' },
        { path: '/auth/sign-up', name: 'Sign Up' },
      ];

  const settingsComponent = (
    <div className="flex justify-between w-full">
      <div className="flex py-4 dropdown">
        <BiGlobe className="text-xl cursor-pointer" />
        <select value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
          <option value="EN">EN</option>
          <option value="ID">ID</option>
        </select>
      </div>
      <div className="flex items-center pr-5 dropdown">
        <IoMdSunny className="text-xl cursor-pointer" />
        <select value={selectedTheme} onChange={(e) => handleThemeChange(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="fixed w-full flex flex-col z-[50]">
      <div
        className={`top-0 left-0 flex flex-row-reverse items-center justify-between w-full px-6 py-2 border-b sm:px-16 lg:flex-row ${
          selectedTheme === 'dark'
            ? 'bg-secondary border-gray-900 text-textWhite'
            : 'bg-primary border-slate-400 text-textBlack'
        }`}
      >
        <div className="logo">
          <a href="/user/home">
            <img className="h-10 w-44" src={logo} alt="Verifex" />
          </a>
        </div>
        <div className="items-center hidden space-x-32 sm:flex">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              end={route.path === '/'}
              className={({ isActive }) => (isActive ? 'block py-5 font-bold' : 'block py-5')}
            >
              {route.name}
            </NavLink>
          ))}
        </div>
        <button onClick={toggleMenu} className="text-4xl sm:hidden">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
        <div
          className={`absolute top-14 w-full left-0 px-5 bg-primary ${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-wrap sm:hidden `}
        >
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              end={route.path === '/'}
              className={({ isActive }) => (isActive ? 'block py-5 font-bold' : 'block py-5')}
            >
              {route.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`absolute top-14 w-full left-0 px-5 bg-primary ${
          isMenuOpen ? 'flex shadow-lg ' : 'hidden'
        } flex-wrap sm:hidden  ${
          selectedTheme === 'dark'
            ? 'bg-secondary shadow-lg text-textWhite'
            : 'bg-primary shadow-lg text-textBlack'
        } z-50`}
      >
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            end={route.path === '/'}
            className={({ isActive }) =>
              isActive ? 'block w-full py-5 font-bold' : 'block w-full py-5'
            }
            onClick={toggleMenu}
          >
            {route.name}
          </NavLink>
        ))}
        {settingsComponent}
      </div>
      {/* Overlay hanya muncul di viewport mobile ketika menu terbuka dan hanya menutupi isi di bawah navbar */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          style={{ top: '60px' }}
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`items-center justify-end hidden w-full pr-10 space-x-4 shadow-md lg:flex ${
          selectedTheme === 'dark' ? 'bg-secondary text-textWhite' : 'bg-primary text-textBlack'
        }`}
      >
        <div className="flex py-4 dropdown">
          <BiGlobe className="text-xl cursor-pointer" />
          <select
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className={`${
              selectedTheme === 'dark' ? 'bg-secondary text-textWhite' : 'bg-primary text-textBlack'
            }`}
          >
            <option value="EN">EN</option>
            <option value="ID">ID</option>
          </select>
        </div>
        <div className="flex items-center pr-5 dropdown ">
          <IoMdSunny className="text-xl cursor-pointer" />
          <select
            value={selectedTheme}
            onChange={(e) => handleThemeChange(e.target.value)}
            className={`outline-none items-center ${
              selectedTheme === 'dark' ? 'bg-secondary text-textWhite' : 'bg-primary text-textBlack'
            }`}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navbar;
