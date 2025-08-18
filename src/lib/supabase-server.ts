import "server-only";

import { cookies } from "next/headers";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL as string;
const SUPABASE_KEY = process.env.SUPABASE_KEY as string;

export async function createSupabaseServerClient(): Promise<SupabaseClient> {
  const client = createClient(SUPABASE_URL, SUPABASE_KEY);
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("sb-access-token")?.value;
  const refreshToken = cookieStore.get("sb-refresh-token")?.value;
  if (accessToken && refreshToken) {
    // Hydrate session for this request if cookies exist
    // We intentionally ignore the promise since it's ok if tokens are invalid/expired; calls will fail gracefully
    client.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
  }
  return client;
}

export async function getUserFromCookies() {
  const client = await createSupabaseServerClient();
  const { data } = await client.auth.getUser();
  return data.user ?? null;
}
