import { CategoriesDTO } from "@/DTO/categoriesDTO";

export interface CategoriesRepositoryInterface {
    findAll():Promise<CategoriesDTO[]>
    findById(id:string):Promise<CategoriesDTO | null>
   
}