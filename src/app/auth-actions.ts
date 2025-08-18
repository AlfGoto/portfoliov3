"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";

function setSessionCookies(accessToken: string, refreshToken: string) {
  const cookieStore = cookies();
  const isProd = process.env.NODE_ENV === "production";
  cookieStore.set("sb-access-token", accessToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  cookieStore.set("sb-refresh-token", refreshToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }
  if (!data.session) {
    redirect(`/login?error=${encodeURIComponent("No session returned")}`);
  }
  setSessionCookies(data.session.access_token, data.session.refresh_token);
  redirect("/");
}

export async function registerAction(formData: FormData) {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) {
    redirect(`/register?error=${encodeURIComponent(error.message)}`);
  }
  redirect("/login");
}

export async function logoutAction() {
  const cookieStore = cookies();
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  cookieStore.delete("sb-access-token");
  cookieStore.delete("sb-refresh-token");
  redirect("/");
}
