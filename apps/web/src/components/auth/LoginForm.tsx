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
    <div className="login-form-container">
      <div className="login-form-header">
        <h3>Sign In</h3>
        <p>Welcome back! Please sign in to your account.</p>
      </div>
      
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            name="email" 
            placeholder="Enter your email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"
            name="password" 
            placeholder="Enter your password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        
        <div className="form-options">
          <div className="remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a href="/forgot_password" className="forgot-password">
            Forgot password?
          </a>
        </div>
        
        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>
      
      <div className="login-footer">
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>

      <div className="auth-footer">
        &copy; {new Date().getFullYear()} Sonderall. All rights reserved.
      </div>
    </div>
  );
}