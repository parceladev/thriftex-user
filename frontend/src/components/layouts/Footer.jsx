import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const routes = [
    { id: 'contact', path: '/user/contact-us', name: 'CONTACT US' },
    {
      id: 'terms',
      path: '/user/terms-of-condition',
      name: 'TERMS OF CONDITION',
    },
    { id: 'faq', path: '/user/contact-us', name: 'FAQ' },
  ];

  return (
    <section className="w-full text-center border-t border-b border-slate-200 bg-primary">
      <div className="flex gap-20 px-6 py-3 sm:px-16 text-primary">
        {routes.map((route) => (
          <Link key={route.id} to={route.path}>
            {route.name}
          </Link>
        ))}
      </div>
      <div className="flex justify-between w-full gap-4 px-6 py-5 sm:px-16">
        <div className="flex justify-start space-x-6">
          <FaInstagram className="text-xl cursor-pointer text-slate-600" />
          <FaFacebook className="text-xl cursor-pointer text-slate-600" />
          <FaYoutube className="text-xl cursor-pointer text-slate-600" />
          <FaTwitter className="text-xl cursor-pointer text-slate-600" />
        </div>
        <div className="flex justify-end">
          <p>&copy; 2024 VERIFEX</p>
        </div>
      </div>
    </section>
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
