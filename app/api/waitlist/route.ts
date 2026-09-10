import { Hono } from "hono";
import { handle } from "hono/vercel";
import { render } from "@react-email/render";
import { getTransporter } from "@/lib/mailer";
import { waitlistSchema } from "@/lib/schemas/waitlist";
import WaitlistEmail from "@/emails/WaitlistEmail";

export const runtime = "nodejs";

const app = new Hono().basePath("/api/waitlist");

app.post("/", async (c) => {
  const body = await c.req.json().catch(() => null);
  const parsed = waitlistSchema.safeParse(body);

  if (!parsed.success) {
    return c.json(
      { message: "Please provide a valid name and email." },
      400,
    );
  }

  const { name, email } = parsed.data;

  const html = await render(WaitlistEmail({ name, email }));

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      to: process.env.WAITLIST_TO_EMAIL ?? process.env.SMTP_USER,
      replyTo: email,
      subject: `New waitlist signup: ${name}`,
      html,
    });
  } catch (error) {
    console.error("Failed to send waitlist email", error);
    return c.json(
      { message: "Something went wrong. Please try again." },
      502,
    );
  }

  return c.json({ message: "You're on the waitlist!" });
});

export const POST = handle(app);
