import { UserRepository } from "../../../data/User/index";
import prisma from "../../../../db";
import { PrismaClient } from "@prisma/client";
const repository = new UserRepository(prisma as PrismaClient);
export async function POST(request: Request) {
  try {
    const res = await request.json();
    const { email } = res;
    
    const users = await repository.findByEmail(email);
    if (!users) {
      return Response.json(
        { message: "Usuário não cadastrado no sistema!" },
        { status: 404 }
      );
    }

    return Response.json({ users }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return Response.json(
      { message: `Error ${error.message}` },
      { status: 404 }
    );
  }
}
