/**
 * AuthLayout
 * Authentication layout component for the application.
 * 
 * @module app/(auth)/layout
 */
import React from "react";

export const metadata = {
  title: "Auth - " + process.env.NEXT_PUBLIC_APP_NAME,
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="auth-layout">
      <div className="auth-header">
        <h1>Sonderall</h1>
      </div>
      <div className="auth-body">
        {children}
      </div>
      <div className="auth-footer">
        &copy; {new Date().getFullYear()} Sonderall. All rights reserved.
      </div>
    </div>
  );
}
