import {User} from "@/model/User"

export interface Room {
  
  id?: string
  name?: string
  user: User
}