import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import AuthField, { authInputClass } from '../components/AuthField';
import { registerAccount } from '../services/api';
import { useAuth } from '../contexts/auth/useAuth';

function PasswordField({ id, label, visible, onToggle, register, error, registerOptions }) {
  return (
    <AuthField label={label} id={id} error={error}>
      <div className="relative">
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          autoComplete="new-password"
          className={`${authInputClass} pr-16`}
          {...register(id, registerOptions)}
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-medium text-teal-600 hover:text-teal-800"
        >
          {visible ? 'Hide' : 'Show'}
        </button>
      </div>
    </AuthField>
  );
}

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const session = await registerAccount(data);
      login(session);
      toast.success(`Welcome, ${session.user.username}!`);
      reset();
      navigate('/');
    } catch (err) {
      toast.error(
        err.response?.status === 400
          ? 'Email already in use.'
          : 'Registration failed.',
      );
    }
  };

  const passwordRules = {
    required: 'Password is required',
    minLength: { value: 6, message: 'At least 6 characters' },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      message: 'Use letters and numbers',
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <AuthField label="Display name" id="username" error={errors?.username?.message}>
        <input
          id="username"
          className={authInputClass}
          placeholder="Your public name"
          {...register('username', {
            required: 'Name is required',
            minLength: { value: 3, message: 'Min 3 characters' },
          })}
        />
      </AuthField>

      <AuthField label="Email address" id="email" error={errors?.email?.message}>
        <input
          id="email"
          type="email"
          className={authInputClass}
          placeholder="you@example.com"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email',
            },
          })}
        />
      </AuthField>

      <PasswordField
        id="password"
        label="Password"
        visible={showPassword}
        onToggle={() => setShowPassword((v) => !v)}
        register={register}
        error={errors?.password?.message}
        registerOptions={passwordRules}
      />

      <PasswordField
        id="confirmPassword"
        label="Confirm password"
        visible={showConfirm}
        onToggle={() => setShowConfirm((v) => !v)}
        register={register}
        error={errors?.confirmPassword?.message}
        registerOptions={{
          required: 'Confirm your password',
          validate: (v) => v === getValues('password') || 'Passwords must match',
        }}
      />

      <button
        type="submit"
        className="w-full mt-2 py-3.5 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-900 transition-colors"
      >
        Create Blog-Project account
      </button>
    </form>
  );
}
