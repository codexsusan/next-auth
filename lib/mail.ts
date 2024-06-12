import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.BASE_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "contact@susankhadka.com.np",
    to: email,
    subject: "Confirm your email.",
    html: `
    <div>
        Click <a href="${confirmLink}">here</a> to confirm email.
    </div>
    `,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "contact@susankhadka.com.np",
    to: email,
    subject: "Reset your password.",
    html: `
    <div>
        Click <a href="${resetLink}">here</a> to reset password.
    </div>
    `,
  });
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  // const confirmationToken = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "contact@susankhadka.com.np",
    to: email,
    subject: "Two Factor Authentication Token.",
    html: `
    <div>
        Your authentication code is  ${token}.
    </div>
    `,
  });
};
