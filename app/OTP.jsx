"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./styles/globals.css";



export const dynamic = 'auto';

export default function OtpPage() {
  const router = useRouter();
    const [form, setForm] = useState({ otp: '' });
    const handleChange = (e) => {
      const { value } = e.target;
      setForm((prev) => ({ ...prev, otp: value }));
    };

  const validateOTP = (value) => {
    return /^\d{4}$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { otp } = form;

    if (!validateOTP(otp)) {
      alert('OTP must be exactly 4 digits (numbers only)');
      return;
    }

    alert('Successful.');
    setForm({ otp: '' });
    router.push('/home');
  };

  return (
  <div className='main-container'>
    <h2 className="otp">OTP Page</h2>
    <form className="input-container" onSubmit={handleSubmit}>
      <label htmlFor="password">
        <input
          name="password"
          type="text"
          inputMode="numeric"
          pattern="\\d*"
          id="password-entry"
          value={form.otp}
          onChange={handleChange}
          placeholder="enter the OTP..."
          maxLength={4}
        />
      </label>

      {form.otp.length > 0 && !validateOTP(form.otp) && (
        <div className="field-error">OTP must be 4 digits.</div>
      )}

      <div className="button-container">
        <button id="enter-btn" type="submit">Submit</button>
      </div>
    </form>
  
  </div>
  );
}
