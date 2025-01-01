import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sjxapaetlxjxcsvwxnil.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqeGFwYWV0bHhqeGNzdnd4bmlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwMjE5NjgsImV4cCI6MjA1MDU5Nzk2OH0.gWm5peMRZOYDzHG9vriEC1cvUEW9URO1DujBQJBv7nQ';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase credentials');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);