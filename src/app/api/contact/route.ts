import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const {
    name,
    email,
    phone,
    businessName,
    businessWebsite,
    linkedin,
    industry,
    yearsInBusiness,
    annualRevenue,
  } = await req.json();

  if (
    !name ||
    !email ||
    !businessName ||
    !businessWebsite ||
    !linkedin ||
    !industry ||
    !yearsInBusiness ||
    !annualRevenue
  ) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Business name: ${businessName}`,
    `Business website: ${businessWebsite}`,
    `LinkedIn: ${linkedin}`,
    `Industry: ${industry}`,
    `Years in business: ${yearsInBusiness}`,
    `Annual revenue: ${annualRevenue}`,
  ].join("\n");

  const { error } = await resend.emails.send({
    from: "Contact Form <contact@mattsprang.com>",
    to: "matt@mattsprang.com",
    replyTo: email,
    subject: `New inquiry from ${name} — ${businessName}`,
    text,
  });

  if (error) {
    return NextResponse.json(
      { error: "Failed to send. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
