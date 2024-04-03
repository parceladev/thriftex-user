import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from '../components/layouts';
import routes from './../routes';

export function UserLayout() {
  return (
    <div>
      <Navbar routes={routes} />
      <div>
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === 'UserLayout' &&
              pages.map(({ path, element }) => (
                <Route exact key={path} path={path} element={element} />
              ))
          )}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

UserLayout.displayName = '/src/layouts/UserLayout.jsx';

export default UserLayout;
