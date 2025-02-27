"use server";

import { UserRepository } from "@/data/User";
import prisma from "../db";
import { PrismaClient } from "@prisma/client";
import { generateVerificationToken } from "@/utils/generateToken";
import { sendEmail } from "@/utils/providers/nodemailers";
const userRepo = new UserRepository(prisma as PrismaClient);

export const registerAction = async (data: any) => {
  try {
    // Validate the input data
    const existUSer = await userRepo.findByEmail(data.email);
    if (existUSer) {
      return { status: 401, error: "Email já cadastrado no sistema " };
    }
    await userRepo.create(data);
    const token = await generateVerificationToken(data.email);
    await sendEmail(token?.token);
    return { status: 201, message: "Usuário criado com sucesso" };
  } catch (error) {
    if ((error as { code: string }).code === "ETIMEDOUT") {
      return {
        error: "Unable to connect to the database. Please try again later.",
      };
    } else if ((error as { code: string }).code === "503") {
      return {
        error: "Service temporarily unavailable. Please try again later.",
      };
    } else {
      return { error: "An unexpected error occurred. Please try again later." };
    }
  }
};
