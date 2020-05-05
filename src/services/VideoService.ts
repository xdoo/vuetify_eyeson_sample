import Axios from "axios"

export abstract class VideoService {
  private static axios = Axios.create()
  private static basePath: string = "https://api.eyeson.team/"
  
  static async createRoom(apikey: string): Promise<any>{
    const url = this.basePath + "room"

    
  }

}