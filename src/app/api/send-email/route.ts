import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { fromName, fromEmail, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.P_EMAIL,
      pass: process.env.P_PASSWORD,
    },
  });

  try {
    const result = await transporter.sendMail({
      from: `Felix Perez <${process.env.P_EMAIL}>`,
      to: [`${process.env.P_EMAIL}`],
      subject: `Contact form - Felix Perez Website`,
      html: `
      <div>
      <p>Message from <strong>${fromName}</strong></p>
      <p>Email: <strong>${fromEmail}</strong></p>
      <p>Message: <strong>${message}</strong></p>
      </div>
      `,
    });
    return NextResponse.json({ ok: true, message: "Success!" });
  } catch (error) {
    return NextResponse.json({ ok: false, error });
  }
}
