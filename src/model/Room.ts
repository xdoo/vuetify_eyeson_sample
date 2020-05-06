import {User} from "@/model/User"

export interface RoomI {
  
  id?: string;
  name?: string;
  user: User;
}

export class Room implements RoomI {

  id?: string
  name?: string
  user: User

  constructor(user: User) {
    this.user = user
  }
}