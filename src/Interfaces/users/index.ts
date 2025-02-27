
import { UserOutputDTO ,UserInputDto} from "@/DTO/usersDTO";


export interface UserRepositoryInterface {
    create(data:UserInputDto):Promise<UserOutputDTO | null>
    findByEmail(email:string):Promise<UserOutputDTO | null>
    findByEmail(id:string):Promise<UserOutputDTO | null>
    
   
}