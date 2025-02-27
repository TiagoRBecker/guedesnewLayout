import { CategoriesDTO } from "@/DTO/categoriesDTO";
import { CategoriesRepositoryInterface } from "@/Interfaces/categories";
import prisma from "../../../../../db"
import { PrismaClient } from "@prisma/client";
import logger from "@/utils/providers/winstom";
export default class CategoriesRepository implements CategoriesRepositoryInterface {
    prisma = prisma
    constructor(prisma:PrismaClient) {
      this.prisma = prisma;
    }
  
   async findAll(): Promise<CategoriesDTO[]> {
       try {
         const categories = await this.prisma?.categories.findMany({
            select:{
                id:true,
                name:true,
                products:true
            }
         })
         return categories as CategoriesDTO[]
       } catch (error) {
         logger.error(`Erro ao buscar categories ${error}`)
         throw new Error (`Erro ao buscar as categorias `)
       }
   }
   async findById(id: string): Promise<CategoriesDTO | null> {
    try {
        const categories = await this.prisma?.categories.findUnique({
           where:{
            id
           },
           include:{
            products:true
           }
        })
        return categories as CategoriesDTO
      } catch (error) {
        console.log(`Erro ao buscar categories ${error}`)
        throw new Error (`Erro ao buscar as categorias `)
      }
   }
  }