/**
 * Signup form component
 * This component renders a signup form and handles user registration.
 * 
 * @module components/layout/SignupForm
 */
"use client";

import React, { useState } from 'react';
import { authClient } from '@/libs/auth-client';

/**
 * SignupForm Component
 * Renders a signup form and manages its state.
 * 
 * @returns {JSX.Element} - The rendered signup form component
 */
export default function SignupForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  /**
   * Handle form submission for signup
   * @param event - The form submission event
   */
  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Call your signup API here
    const { data, error } = await authClient.signUp.email({
      email: email,
      password: password,
      name: name,
      callbackURL: "/dashboard",
    }, {
        onRequest: (req) => {
            // Modify request if needed
            return req;
        },
        onSuccess: (res) => {
            // Handle success response if needed
            console.log("Signup success (callback):", res);
        },
        onError: (err) => {
            // Handle error response if needed
            console.error("Signup error (callback):", err);
        }
    });
    
    if (error) {
      console.error("Signup error:", error);
      // Handle signup error (e.g., show a message to the user)
    } else {
      console.log("Signup successful:", data);
      // Handle successful signup (e.g., redirect to dashboard)
    }
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <input type="text" name="name" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
        <input type="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}   