import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";

export async function POST(req: NextRequest) {
  try {
    const { review, projectName } = await req.json();
    if (!review || !projectName) {
      return NextResponse.json(
        { error: "Missing review or projectName" },
        { status: 400 }
      );
    }

    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.auth.getUser();
    const email = data.user?.email ?? "anonymous";
    const author = email.includes("@") ? email.split("@")[0] : email;

    const upstream = await fetch(
      String(process.env.NEXT_PUBLIC_AWS_ENDPOINT) + "/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author, review, projectName }),
      }
    );

    if (!upstream.ok) {
      const details = await upstream.text();
      return NextResponse.json(
        { error: "AWS upstream failed", details },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
