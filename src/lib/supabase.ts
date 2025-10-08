import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Testimonial {
  id: string;
  name_or_initials: string;
  text: string;
  approved: boolean;
  created_at?: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  submitted_at?: string;
}

export interface Subscriber {
  id: string;
  email: string;
  joined_at?: string;
}
