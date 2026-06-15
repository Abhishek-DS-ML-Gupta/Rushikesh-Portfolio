import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'rushikeshdhuri88@gmail.com',
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <rushikeshdhuri88@gmail.com>`,
      to: 'rushikeshdhuri88@gmail.com',
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Message — Rushikesh Dhuri</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #0a0a0a; font-family: 'Inter', system-ui, sans-serif; color: #e5e5e5; }
  </style>
</head>
<body style="background:#0a0a0a; padding: 0; margin: 0;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0a0a0a; padding: 48px 24px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">

          <!-- Headline -->
          <tr>
            <td style="padding: 0 0 36px;">
              <p style="font-size:11px; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.28); font-weight:500; margin-bottom:16px;">
                New Message Received
              </p>
              <h1 style="font-size:36px; font-weight:700; color:#ffffff; letter-spacing:-0.03em; line-height:1.1; margin:0;">
                You have a<br/>
                <span style="color:rgba(255,255,255,0.35); font-weight:300; font-style:italic;">new inquiry</span>
              </h1>
            </td>
          </tr>

          <!-- Sender card -->
          <tr>
            <td style="padding-bottom: 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03);">
                <tr>
                  <td style="padding: 28px 32px;">
                    <p style="font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:rgba(255,255,255,0.22); font-weight:500; margin-bottom:8px;">
                      From
                    </p>
                    <p style="font-size:22px; font-weight:600; color:#ffffff; letter-spacing:-0.02em; margin-bottom:4px;">
                      ${name}
                    </p>
                    <a href="mailto:${email}"
                      style="font-size:13px; color:rgba(255,255,255,0.45); text-decoration:none; letter-spacing:0.01em;">
                      ${email}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding-bottom: 40px;">
              <p style="font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:rgba(255,255,255,0.22); font-weight:500; margin-bottom:16px;">
                Message
              </p>
              <div style="border-left: 2px solid rgba(255,255,255,0.15); padding-left: 24px;">
                <p style="font-size:15px; line-height:1.8; color:rgba(255,255,255,0.7); white-space:pre-line;">
                  ${message.replace(/</g, '<').replace(/>/g, '>')}
                </p>
              </div>
            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td style="padding-bottom: 48px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:#ffffff;">
                    <a href="mailto:${email}"
                      style="display:inline-block; padding: 14px 32px; font-size:11px; letter-spacing:0.2em; text-transform:uppercase; font-weight:600; color:#0a0a0a; text-decoration:none;">
                      Reply to ${name} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top: 8px;">
              <p style="font-size:10px; letter-spacing:0.12em; color:rgba(255,255,255,0.12); line-height:1.8;">
                This message was submitted via the contact form on your portfolio
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}