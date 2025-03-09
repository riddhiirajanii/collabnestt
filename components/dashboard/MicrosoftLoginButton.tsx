"use client";

import React from 'react';

export default function MicrosoftLoginButton() {
  return (
    <button
      onClick={() => (window.location.href = "http://localhost:5000/auth/microsoft")}
      className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
        <path fill="#18181B" d="M1 1h10v10H1z"/>
        <path fill="#18181B" d="M1 13h10v10H1z"/>
        <path fill="#18181B" d="M13 1h10v10H13z"/>
        <path fill="#18181B" d="M13 13h10v10H13z"/>
      </svg>
      Microsoft
    </button>
  );
}