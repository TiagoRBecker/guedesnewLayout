import { TokenEmail } from "@/DTO/tokenVerifyEmailDTO";



export interface TokenRepositoryInterface {
    createToken(email:string, token:string, expires:Date):Promise<TokenEmail | null>
    verifyToken(token:string):Promise<TokenEmail | null>
    verifyTokenByEmail(email:string):Promise<TokenEmail | null>
    deleteToken(id:string):Promise<boolean>
    
   
} 