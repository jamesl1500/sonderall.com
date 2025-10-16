/**
 * AuthSignupPage
 * Signup page for the authentication module.
 * 
 * @module app/(auth)/signup/page
 */
import React from "react";
import SignupForm from "@/components/auth/SignupForm";

export default function AuthSignupPage() {
  return (
    <div className="auth-body-inner">
        <div className="auth-column auth-column-left">
            <h2>Create an Account</h2>
            <p>Please fill in the form below to create a new account.</p>
        </div>
        <div className="auth-column auth-column-right">
            <SignupForm />
        </div>
    </div>
  );
};