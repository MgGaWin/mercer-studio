import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const notificationEmail = process.env.NOTIFICATION_EMAIL || "hello@mercerstudio.com";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Mercer Studio <onboarding@resend.dev>",
        to: notificationEmail,
        reply_to: email,
        subject: `New inquiry from ${name}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; padding: 40px; background: #f0ece7;">
            <h2 style="color: #2a2a2a; font-weight: 400; margin-bottom: 30px;">New Project Inquiry</h2>
            <div style="margin-bottom: 20px;">
              <p style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #999; margin-bottom: 4px;">Name</p>
              <p style="font-size: 14px; color: #2a2a2a;">${name}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #999; margin-bottom: 4px;">Email</p>
              <p style="font-size: 14px; color: #2a2a2a;">${email}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #999; margin-bottom: 4px;">Message</p>
              <p style="font-size: 14px; color: #2a2a2a; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            <p style="font-size: 11px; color: #999;">Sent from mercerstudio.com contact form</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
