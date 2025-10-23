/**
 * Auth Header Component
 * Renders the header for authentication pages.
 * - Login
 * - Signup
 * - Password Reset
 * - Email Verification
 * 
 * @returns {JSX.Element} - The rendered auth header component
 */
import React from "react";
import Link from "next/link";

export default function AuthHeader() {
  /**
   * Navigation links for the auth header
   * @type {Array<{name: string, href: string}>}
   * @description Links to navigate between login and signup pages
   */
  const navigationLinks = [
    { name: 'Login', href: '/login' },
    { name: 'Sign Up', href: '/signup' },
  ];

  return (
    <div className="auth-header-container">
      <div className="auth-header-inner">
        <div className="auth-header-branding">
          <h1>Sonderall</h1>
          <p>Your journey to mindfulness starts here.</p>
        </div>
        <div className="auth-header-navigation">
            <ul>
                {navigationLinks.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href} className="auth-header-link">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
}