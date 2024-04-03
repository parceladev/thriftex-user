// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="text-center w-full border-t border-b border-slate-200 bg-primary">
      <div className="flex gap-20 px-10 py-3  text-primary">
        <ul className="flex text-xs space-x-16 justify-start">
          <li>
            <Link to="/contact" className="text-xs lg:text-sm font-bold">
              CONTACT US
            </Link>
          </li>
          <li>
            <Link to="/terms" className="text-xs lg:text-sm font-bold">
              TERMS OF CONDITION
            </Link>
          </li>
          <li>
            <Link to="/faq" className="text-xs lg:text-sm font-bold">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <hr className="left-0" />
      <div className="flex justify-between px-10 pb-3 gap-4 mt-4 w-full">
        <div className="flex justify-start  space-x-6">
          {/* Social media icons */}
          <FaInstagram className="text-slate-600 text-xl cursor-pointer" />
          <FaFacebook className="text-slate-600 text-xl cursor-pointer" />
          <FaYoutube className="text-slate-600 text-xl cursor-pointer" />
          <FaTwitter className="text-slate-600 text-xl cursor-pointer" />
        </div>
        <div className="flex justify-end">
          <p>&copy; 2024 VERIFEX</p>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  routes: [{ name: 'Home Page', path: '/' }],
};

Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = '/src/widgets/layout/footer.jsx';

export default Footer;
