import { signInWithRedirect, signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { googleProvider } from './providers';
import { toast } from 'react-hot-toast';

export const signInWithGoogle = async () => {
  try {
    // Add additional scopes if needed
    googleProvider.addScope('profile');
    googleProvider.addScope('email');
    // Set custom parameters
    googleProvider.setCustomParameters({
      prompt: 'select_account'
    });
    
    await signInWithRedirect(auth, googleProvider);
  } catch (error: any) {
    console.error('Google Sign In Error:', error);
    toast.error(error.message || 'Failed to login with Google');
    throw error;
  }
};

export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    toast.success('Logged out successfully');
  } catch (error: any) {
    console.error('Sign Out Error:', error);
    toast.error(error.message || 'Failed to log out');
    throw error;
  }
};