import { PrismaClient } from "@prisma/client";
import prisma from "../../../db";

import { TokenRepositoryInterface } from "@/Interfaces/token";
import { UserOutputDTO } from "@/DTO/usersDTO";
import { TokenEmail } from "@/DTO/tokenVerifyEmailDTO";
import logger from "@/utils/providers/winstom";

export class VerifyEmailRepository implements TokenRepositoryInterface {
  private prisma = prisma;
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }
  async createToken(
    email: string,
    token: string,
    expires: Date
  ): Promise<TokenEmail | null> {
    try {
      const create = await this.prisma?.verificationToken.create({
        data: {
          email,
          token,
          expires: new Date(expires),
        },
      });
      return create as TokenEmail;
    } catch (error) {
      logger.error(error);
      return null;
    }
  }
  async verifyToken(token: string): Promise<TokenEmail | null> {
    try {
      const verificationToken = await this.prisma?.verificationToken.findUnique(
        {
          where: {
            token: token,
          },
        }
      );

      return verificationToken as TokenEmail;
    } catch (error) {
      logger.error(error);
      return null;
    }
  }
  async verifyTokenByEmail(email: string): Promise<TokenEmail | null> {
    try {
      const verificationToken = await this.prisma?.verificationToken.findUnique(
        {
          where: {
            email: email,
          },
        }
      );

      return verificationToken as TokenEmail;
    } catch (error) {
      logger.error(error);
      return null;
    }
  }
  async deleteToken(id: string): Promise<boolean> {
    try {
      const deleteToken = await this.prisma?.verificationToken.delete(
        {
          where: {
            id
          },
        }
      );

      return true;
    } catch (error) {
      logger.error(error);
      return false;
    }
  }
}
