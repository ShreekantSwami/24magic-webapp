import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const email = String(body.email ?? "").trim();

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    );
  }
  const resend = new Resend(apiKey);
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "contact@24magic.in";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "24MAGIC <contact@24magic.in>";

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: "New Waitlist Signup",
      html: `
        <div style="font-family: sans-serif; padding: 24px; color: #1f1a1b;">
          <h2 style="color: #830036; margin-bottom: 8px;">New Waitlist Signup</h2>
          <p style="margin: 0; color: #6b5c5d;">Someone just joined the waitlist for 24MAGIC.</p>
          <p style="margin: 16px 0 0; font-size: 18px; font-weight: 600;">
            <a href="mailto:${email}" style="color: #830036; text-decoration: none;">${email}</a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to process your request. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Unexpected error sending waitlist email:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
