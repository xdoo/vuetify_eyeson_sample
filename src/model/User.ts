export interface UserI {
  
  id?: string;
  name: string;
  avatar?: URL;
}

export class User implements UserI {
  
  id?: string
  name: string
  avatar?: URL

  constructor(name: string) {
    this.name = name
  }
}