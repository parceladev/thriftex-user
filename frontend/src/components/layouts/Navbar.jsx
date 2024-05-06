// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../../public/generals/thriftex-logo-text.jpg';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { BiGlobe } from 'react-icons/bi';
import { IoMdSunny } from 'react-icons/io';
import './Navbar.css';
import { getAccessToken } from '../../utils/token-utilities';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN'); // Default language
  const [selectedTheme, setSelectedTheme] = useState('light'); // Default theme

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Logic to change language
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  const isUserLoggedIn = getAccessToken();

  const routes = isUserLoggedIn
    ? [
        { path: '/', name: 'Home' },
        { path: '/user/legit-check', name: 'Legit Check' },
        { path: '/user/about', name: 'About' },
        { path: '/user/profile', name: 'Profile' },
      ]
    : [
        { path: '/', name: 'Home' },
        { path: '/user/legit-check', name: 'Legit Check' },
        { path: '/user/about', name: 'About' },
        { path: '/auth/sign-up', name: 'Sign Up' },
      ];

  const settingsComponent = (
    <div className="flex justify-between w-full">
      <div className="flex py-4 dropdown">
        <BiGlobe className="text-xl cursor-pointer" />
        <select
          value={selectedLanguage}
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          <option value="EN">EN</option>
          <option value="ID">ID</option>
        </select>
      </div>
      <div className="flex items-center pr-5 dropdown">
        <IoMdSunny className="text-xl cursor-pointer" />
        <select
          value={selectedTheme}
          onChange={(e) => handleThemeChange(e.target.value)}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="fixed w-full flex flex-col z-[48]">
      <div className="top-0 left-0 flex flex-row-reverse items-center justify-between w-full px-6 py-2 border-b sm:px-16 lg:flex-row border-slate-200 bg-primary">
        <div className="logo">
          <a href="/user/home">
            <img className="h-10 w-44" src={logo} alt="Verifex" />
          </a>
        </div>
        <div className="items-center hidden space-x-32 sm:flex">
          {routes.map((route) => (
            <Link key={route.path} to={route.path}>
              {route.name}
            </Link>
          ))}
        </div>
        <button onClick={toggleMenu} className="text-4xl sm:hidden">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
        <div
          className={`absolute top-14 w-full left-0 px-5 bg-primary ${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-wrap sm:hidden`}
        >
          {routes.map((route) => (
            <Link
              className="block w-full py-5"
              key={route.path}
              to={route.path}
              onClick={toggleMenu}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`absolute top-14 w-full left-0 px-5 bg-primary ${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-wrap sm:hidden`}
      >
        {routes.map((route) => (
          <Link
            className="block w-full py-5"
            key={route.path}
            to={route.path}
            onClick={toggleMenu}
          >
            {route.name}
          </Link>
        ))}
        {settingsComponent}
      </div>
      <div className="items-center justify-end hidden w-full pr-10 space-x-4 shadow-md lg:flex bg-primary">
        <div className="flex py-4 dropdown">
          <BiGlobe className="text-xl cursor-pointer" />
          <select
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="EN">EN</option>
            <option value="ID">ID</option>
          </select>
        </div>
        <div className="flex pr-5 dropdown">
          <IoMdSunny className="text-xl cursor-pointer" />
          <select
            value={selectedTheme}
            onChange={(e) => handleThemeChange(e.target.value)}
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
