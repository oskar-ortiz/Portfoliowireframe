import { NextResponse } from "next/server";

const CONTACT_EMAIL = "oskarortiz124@gmail.com";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORM_SUBMIT_ENDPOINT =
  process.env.CONTACT_FORM_ENDPOINT?.trim() || `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
      honey?: string;
    };

    const honey = normalizeText(payload.honey);

    if (honey) {
      return NextResponse.json({ success: true });
    }

    const name = normalizeText(payload.name);
    const email = normalizeText(payload.email);
    const message = normalizeText(payload.message);

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Invalid name." }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    if (!message || message.length < 10) {
      return NextResponse.json({ error: "Invalid message." }, { status: 400 });
    }

    const upstreamResponse = await fetch(FORM_SUBMIT_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Nuevo mensaje del portfolio de ${name}`,
        _replyto: email,
        _template: "table",
        _captcha: "false",
      }),
      cache: "no-store",
    });

    if (!upstreamResponse.ok) {
      const details = await upstreamResponse.text();
      console.error("Contact form upstream error:", details);

      return NextResponse.json(
        { error: "Unable to deliver the message right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
