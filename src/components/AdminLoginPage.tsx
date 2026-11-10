import React, { useState } from 'react';
import { HERO_CHARACTER } from '../data/brands';

const CRM_DASHBOARD_URL = 'https://the-kong-group-crm.vercel.app/#dashboard';

interface AdminLoginPageProps {
  onBackHome: () => void;
}

export const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onBackHome }) => {
  const [email, setEmail] = useState('allysa.techaf@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password.trim()) {
      setError('Please enter your admin email and password to continue.');
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      window.location.href = CRM_DASHBOARD_URL;
    }, 350);
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-page__ambient" aria-hidden="true" />

      <header className="admin-login-page__topbar">
        <button
          type="button"
          className="admin-login-page__back-btn"
          onClick={onBackHome}
        >
          <span aria-hidden="true">←</span>
          <span>BACK TO WEBSITE</span>
        </button>

        <span className="admin-login-page__badge">INTERNAL PORTAL</span>
      </header>

      <main className="admin-login-page__main">
        <section
          className="admin-login-card"
          aria-labelledby="admin-login-heading"
        >
          <div className="admin-login-card__brand">
            <img
              src="/assets/logo/the-kong-group-logo-white.png"
              width={807}
              height={487}
              alt="The Kong Group"
              className="admin-login-card__logo"
              decoding="sync"
              draggable={false}
            />
            <div className="admin-login-card__mascot-pill">
              <img
                src={HERO_CHARACTER.image}
                width={HERO_CHARACTER.width}
                height={HERO_CHARACTER.height}
                alt=""
                aria-hidden="true"
                className="admin-login-card__mascot-img"
              />
              <span>THE KONG GROUP CRM</span>
            </div>
          </div>

          <div className="admin-login-card__header">
            <h1 id="admin-login-heading" className="admin-login-card__title">
              Admin Sign In
            </h1>
            <p className="admin-login-card__subtitle">
              Sign in to manage bookings, customer insights, and operations across
              all four Kong Group concepts.
            </p>
          </div>

          <form
            className="admin-login-form"
            onSubmit={handleSubmit}
            noValidate
          >
            {error && (
              <div className="admin-login-form__error" role="alert">
                {error}
              </div>
            )}

            <div className="admin-login-form__field">
              <label
                htmlFor="admin-email"
                className="admin-login-form__label"
              >
                ADMIN EMAIL OR ID
              </label>
              <input
                id="admin-email"
                type="email"
                autoComplete="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@thekonggroup.my"
                className="admin-login-form__input"
              />
            </div>

            <div className="admin-login-form__field">
              <div className="admin-login-form__label-row">
                <label
                  htmlFor="admin-password"
                  className="admin-login-form__label"
                >
                  PASSWORD
                </label>
                <button
                  type="button"
                  className="admin-login-form__toggle-pw"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>
              </div>
              <input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="admin-login-form__input"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="admin-login-form__submit"
            >
              <span>
                {isSubmitting
                  ? 'REDIRECTING TO CRM DASHBOARD…'
                  : 'SIGN IN TO CRM DASHBOARD'}
              </span>
              <span aria-hidden="true">↗</span>
            </button>
          </form>

          <div className="admin-login-card__footer">
            <span className="admin-login-card__lock" aria-hidden="true">
              ●
            </span>
            <span>
              Protected access for authorized Kong Group management only.
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};
