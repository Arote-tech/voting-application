"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function InputData() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateNIN = (value) => {
    return /^\d{11}$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;

    if (!validateEmail(email)) {
      alert('Email is not valid');
      return;
    }

    if (!validateNIN(password)) {
      alert('NIN must be exactly 11 digits (numbers only)');
      return;
    }

    alert('Registration successful. Please do not share your NIN.');
    setForm({ email: '', password: '' });
    router.push('/home');
  };

  return (
    <div className="input-container">
      <form id="reg-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="email">
            <input
              name="email"
              type="email"
              className="entry"
              id="email-entry"
              value={form.email}
              onChange={handleChange}
              placeholder="enter your email address..."
            />
          </label>
          {!validateEmail(form.email) && form.email.length > 0 && (
            <div className="field-error">Please enter a valid email address.</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">
            <input
              name="password"
              type="text"
              inputMode="numeric"
              pattern="\d*"
              className="entry"
              id="password-entry"
              value={form.password}
              onChange={handleChange}
              placeholder="enter your NIN as password..."
            />
          </label>
          {form.password.length > 0 && !validateNIN(form.password) && (
            <div className="field-error">NIN must be exactly 11 digits.</div>
          )}
        </div>

        <div className="progress">
          <button
            type="submit"
            id="enter-btn"
            disabled={!(validateEmail(form.email) && validateNIN(form.password))}
          >
            Enter
          </button>
          <p className="reg-notice">
            <a href="#registration">Registration</a>
          </p>
        </div>
      </form>
    </div>
  );
}