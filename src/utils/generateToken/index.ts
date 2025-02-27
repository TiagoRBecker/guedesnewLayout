
import { v4 as uuidv4 } from 'uuid';
import {VerifyEmailRepository} from "@/data/Tokens/index"
import prisma from '../../../db';
import { PrismaClient } from '@prisma/client';
const tokenRepo =  new VerifyEmailRepository(prisma as PrismaClient)

export const generateVerificationToken = async (email: string) => {
    // Generate a random token 
    const token = uuidv4();
    const expires = new Date().getTime() + 1000 * 60 * 60 * 1; // 1 hours

    // Check if a token already exists for the user
    const existingToken = await tokenRepo.verifyTokenByEmail(email)

    if(existingToken) {
       await tokenRepo.deleteToken(existingToken?.id as string)
    }

    // Create a new verification token
    const verifyToken = await tokenRepo.createToken(email,token,expires as any)

    return verifyToken;
}