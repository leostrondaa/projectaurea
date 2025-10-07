// React Router
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Create from './pages/create';
import Create2 from './pages/create2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/create',
    element: <Create />,
  },
  {
    path: '/create2',
    element: <Create2 />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);

export default router;
