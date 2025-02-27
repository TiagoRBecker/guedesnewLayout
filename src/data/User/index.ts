import { UserRepositoryInterface } from "@/Interfaces/users";
import { SignupData } from "@/utils/validation/signup";
import { PrismaClient } from "@prisma/client";
import prisma from "../../../db";
import { UserInputDto, UserOutputDTO } from "@/DTO/usersDTO";
import logger from "@/utils/providers/winstom";

export class UserRepository implements UserRepositoryInterface {
  private prisma = prisma;
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }
  async create(data: UserInputDto): Promise<UserOutputDTO | null> {
    try {
      const user = await this.prisma?.user.create({
        data: {
          email: data.email,
          password: data.password,
          image: data.image,
          name: data.name,
        },
      });
      return user as UserOutputDTO ;
    } catch (error) {
     
      logger.info(error);
      return null
    }
  }
  async findByEmail(email: string): Promise<UserOutputDTO | null> {
    try {
      const user = await this.prisma?.user.findUnique({
        where: {
          email,
        },
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      });
      return user as UserOutputDTO;
    } catch (error) {
      logger.error(error);
      return null;
    }
  }
  async findByID(id: string): Promise<UserOutputDTO | null> {
    try {
      const user = await this.prisma?.user.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      });
      return user as UserOutputDTO;
    } catch (error) {
      logger.error(error);
      return null;
    }
  }
}
