import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import AuthField, { authInputClass } from '../components/AuthField';
import { signIn } from '../services/api';
import { useAuth } from '../contexts/auth/useAuth';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const session = await signIn(data);
      login(session);
      toast.success(`Welcome back, ${session.user.username}!`);
      reset();
      navigate('/');
    } catch (err) {
      const status = err.response?.status;
      toast.error(
        status === 400
          ? 'Invalid email or password.'
          : 'Login failed. Try again.',
      );
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <AuthField label="Email address" id="email" error={errors?.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={authInputClass}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
        />
      </AuthField>

      <AuthField label="Password" id="password" error={errors?.password?.message}>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            placeholder="Your password"
            className={`${authInputClass} pr-16`}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'At least 6 characters',
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                message: 'Use letters and numbers',
              },
            })}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-medium text-teal-600 hover:text-teal-800"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </AuthField>

      <button
        type="submit"
        className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold shadow-md shadow-teal-600/25 hover:from-teal-700 hover:to-teal-600 transition-all"
      >
        Log in to Blog-Project
      </button>
    </form>
  );
}
