"use server";

import { signIn } from "@/auth";

export async function login(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}
