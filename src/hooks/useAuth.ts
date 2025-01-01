import { useState, useEffect } from 'react';
import { User, getRedirectResult } from 'firebase/auth';
import { auth } from '../config/firebase';
import { signInWithGoogle, signOut as firebaseSignOut } from '../lib/auth/utils';
import { toast } from 'react-hot-toast';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    // Handle redirect result
    getRedirectResult(auth).then((result) => {
      if (result) {
        toast.success('Logged in successfully!');
      }
    }).catch((error) => {
      console.error('Redirect Error:', error);
      toast.error('Failed to login with Google');
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signInWithGoogle,
    signOut: firebaseSignOut
  };
};