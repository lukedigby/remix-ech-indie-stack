import type { Password, User } from "@prisma/client";

import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

export async function getUserById(id: User["id"]) {
  return null;
}

export async function getUserByEmail(email: User["email"]) {
  return null;
}

export async function createUser(email: User["email"], password: string) {
}

export async function deleteUserByEmail(email: User["email"]) {
}

export async function verifyLogin(
  email: User["email"],
  password: Password["hash"]
) {
}
