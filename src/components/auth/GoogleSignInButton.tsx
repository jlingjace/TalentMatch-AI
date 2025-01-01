import React from 'react';
import { FaGoogle } from 'react-icons/fa';

interface GoogleSignInButtonProps {
  onClick: () => void;
}

export const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-500 shadow-sm hover:bg-gray-50"
    >
      <FaGoogle />
      <span>Continue with Google</span>
    </button>
  );
};