"use server";
import * as z from "zod";
import { AuthError } from "next-auth";

import { LoginSchema } from "@/schemas";
import { db } from "@/lib/db";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  // const user = await db.use
  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials." };
        default:
          return { error: "Something went wrong." };
      }
    }
    throw error;
  }

  return { message: "Email Sent.", success: true };
};