// pages/api/contact.ts
import EmailTemplate from "@/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { clientName, clientEmail, message } = body;

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: `${clientName} <onboarding@resend.dev>`,
      to: "tusharkarandedev@gmail.com",
      subject: "Opportunity Alert: Freelance Developer Needed!",
      react: EmailTemplate({ clientEmail, clientName, message }),
    });

    return NextResponse.json(
      { message: "Successfully received the data" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred while processing the request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
