import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';

import GuestRoute from './components/GuestRoute';
import ProtectedRoute from './components/ProtectedRoute';
import CreatePost from './pages/CreatePost';
import NotFound from './pages/NotFound';
import LoadingSpinner from './components/LoadingSpinner';
import AuthLayout from './pages/AuthLayout';

import './App.css';

const AppLayout = lazy(() => import('./pages/AppLayout'));
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const EditPost = lazy(() => import('./pages/EditPost'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route
              path="login"
              element={
                <GuestRoute>
                  <Login />
                </GuestRoute>
              }
            />
            <Route
              path="register"
              element={
                <GuestRoute>
                  <Register />
                </GuestRoute>
              }
            />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="post/new" element={<CreatePost />} />
            <Route path="post/:id/edit" element={<EditPost />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Suspense>
  );
}

export default App;
