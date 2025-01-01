import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

export const SocialAuth: React.FC = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-500 shadow-sm hover:bg-gray-50"
        >
          <FaGoogle />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};