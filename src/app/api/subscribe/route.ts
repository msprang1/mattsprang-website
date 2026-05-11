import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json(
      { error: "Valid email is required." },
      { status: 400 },
    );
  }

  const res = await fetch("https://matthewsprang.substack.com/api/v1/free", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Substack subscribe error:", res.status, text);
    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again or subscribe directly at matthewsprang.substack.com.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
