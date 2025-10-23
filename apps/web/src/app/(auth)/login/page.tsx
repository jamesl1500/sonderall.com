/**
 * AuthLoginPage
 * Login page for the authentication module.
 * 
 * @module app/(auth)/login/page
 */
import React from "react";
import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: 'Login - ' + (process.env.SITE_NAME || 'Sonderall'),
  description: 'Log in to your ' + (process.env.SITE_NAME || 'Sonderall') + ' account to access exclusive features and content.',
  keywords: 'login, authentication, user access, ' + (process.env.SITE_NAME || 'Sonderall'),
}

export default function AuthLoginPage() {
  return (
    <div className="auth-body-inner">
        <div className="auth-column auth-column-left">
            <h2>Welcome Back!</h2>
            <p>Sign in to access your personal journal, track your moods, and continue your mindfulness journey with Sonderall.</p>
        </div>
        <div className="auth-column auth-column-right">
            <LoginForm />
        </div>
    </div>
  );
};