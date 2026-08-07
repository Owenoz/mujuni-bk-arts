// Supabase config — Mujuni BK Arts
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

export const SUPABASE_URL  = 'https://mzwjtpqezzkefyghzrzj.supabase.co';
export const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16d2p0cHFlenprZWZ5Z2h6cnpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwOTY1NjYsImV4cCI6MjEwMTY3MjU2Nn0.rKgFwj9Q_z7kgrMhVKlygBpM0jePq5UxTOWJd9m-7jc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);
