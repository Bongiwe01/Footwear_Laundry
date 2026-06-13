// ============================================================
// Footwear Laundry — Auth Service
// src/lib/auth.ts
//
// Handles admin login/logout + session helpers.
// ============================================================

import { supabase } from './supabase';
import type { Profile } from '@/types/database.types';

// ─────────────────────────────────────────────
// Sign in
// ─────────────────────────────────────────────

export async function signIn(
  email: string,
  password: string
): Promise<{ error: string | null }> {
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }

  return { error: null };
}

// ─────────────────────────────────────────────
// Sign out
// ─────────────────────────────────────────────

export async function signOut(): Promise<void> {
  await supabase.auth.signOut();
}

// ─────────────────────────────────────────────
// Get the current user's profile (includes is_admin)
// ─────────────────────────────────────────────

export async function getCurrentProfile(): Promise<{
  profile: Profile | null;
  error: string | null;
}> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { profile: null, error: null };

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) {
    return { profile: null, error: error.message };
  }

  return { profile: data, error: null };
}

// ─────────────────────────────────────────────
// Subscribe to auth state changes
// ─────────────────────────────────────────────
// Usage in a root component or context provider:
//
//   useEffect(() => {
//     const { data: { subscription } } = onAuthStateChange((profile) => {
//       setAdminProfile(profile);
//     });
//     return () => subscription.unsubscribe();
//   }, []);

export function onAuthStateChange(
  callback: (profile: Profile | null) => void
) {
  return supabase.auth.onAuthStateChange(async (_event, session) => {
    if (!session?.user) {
      callback(null);
      return;
    }

    const { profile } = await getCurrentProfile();
    callback(profile);
  });
}