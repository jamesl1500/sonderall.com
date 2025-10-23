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

// Import templates
import AuthHeader from "@/components/templates/auth/AuthHeader";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="auth-layout">
      <div className="auth-header">
        <AuthHeader />
      </div>
      <div className="auth-body">
        {children}
      </div>
    </div>
  );
}
