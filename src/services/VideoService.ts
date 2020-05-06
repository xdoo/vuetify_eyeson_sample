import Axios from "axios"
import { Room } from '@/model/Room'

export abstract class VideoService {
  private static axios = Axios.create()
  private static basePath = "https://api.eyeson.team/"
  
  static async createRoom(apikey: string, room: Room) {
    console.log(apikey)
    const url = this.basePath + "rooms"
    const config = {
      headers: {
        "Authorization": apikey
      }
    }
    console.log(config)
    return this.axios.post(url, room, config)
  }

}