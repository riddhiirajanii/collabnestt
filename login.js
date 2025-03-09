import React from "react";
import Image from "next/image";

const Login = () => {
  const handleLogin = () => {
    // Make sure this matches the port your server is actually running on
    window.location.href = "http://localhost:5000/auth/microsoft";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <div className="w-full max-w-md">
        {/* Login Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Login to CollabNest</h2>
          <p className="text-gray-600">Securely sign in with your Microsoft account</p>
        </div>
        
        {/* Microsoft Login Button */}
        <button
          onClick={handleLogin}
          className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {/* Microsoft Logo */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
            <path fill="#18181B" d="M1 1h10v10H1z"/>
            <path fill="#18181B" d="M1 13h10v10H1z"/>
            <path fill="#18181B" d="M13 1h10v10H13z"/>
            <path fill="#18181B" d="M13 13h10v10H13z"/>
          </svg>
          Sign in with Microsoft
        </button>
        
        {/* Terms of Service */}
        <div className="mt-6 text-center text-sm text-gray-500">
          By clicking continue, you agree to our{' '}
          <a href="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Login;
