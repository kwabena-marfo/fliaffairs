import nodemailer from "nodemailer";

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

export function getTransporter() {
  if (!transporter) {
    const { SMTP_HOST,   SMTP_USER, SMTP_PASS } = process.env;
    if (!SMTP_HOST  || !SMTP_USER || !SMTP_PASS) {
      throw new Error(
        "Missing SMTP configuration. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.",
      );
    }
    transporter = nodemailer.createTransport({
  service: SMTP_HOST,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});;
  }
  return transporter;
}
