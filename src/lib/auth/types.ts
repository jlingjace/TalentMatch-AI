import { User } from 'firebase/auth';

export interface AuthState {
  user: User | null;
  loading: boolean;
}

export interface AuthContextType extends AuthState {
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}