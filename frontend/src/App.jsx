import { Routes, Route, Navigate } from 'react-router-dom';
import { UserLayout } from './layouts/UserLayout';
import { AuthLayout } from './layouts/AuthLayout';

function App() {
  return (
    <Routes>
      <Route path="/user/*" element={<UserLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<Navigate to="/user/home" replace />} />
    </Routes>
  );
}

export default App;
