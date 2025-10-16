/**
 * Login Form Component
 * This component renders a login form and handles user authentication.
 * 
 * @module components/layout/LoginForm
 */
"use client";

import React, { useState } from 'react';
import { authClient } from '@/libs/auth-client';

/**
 * LoginForm Component
 * Renders a login form and manages its state.
 * 
 * @returns {JSX.Element} - The rendered login form component
 */
export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  /**
   * Handle form submission for login
   * @param event - The form submission event
   */
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Call your login API here
    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
      callbackURL: "/dashboard",
      rememberMe: true,
    });
    
    if (error) {
      console.error("Login error:", error);
      // Handle login error (e.g., show a message to the user)
    } else {
      console.log("Login successful:", data);
      // Handle successful login (e.g., redirect to dashboard)
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}