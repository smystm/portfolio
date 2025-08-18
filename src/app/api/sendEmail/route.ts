import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // بهتره همیشه از ایمیل خودت باشه
      replyTo: email, // اینطوری می‌تونی ریپلای کنی به کاربر
      to: process.env.MY_EMAIL,
      subject: "پیام جدید از فرم سایت",
      text: message,
      html: `<p>${message}</p><p>فرستنده: ${name} - ${email}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Email error:", err);
    return NextResponse.json({ success: false, error: err.message });
  }
}
