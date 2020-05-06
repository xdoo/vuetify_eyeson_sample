export interface RoomResponse {
  accessKey: string;
  ready?: boolean;
  room?: any;
  team?: any;
  user?: any;
  links?: any;
  options?: any;
  presentation?: any;
  broadcasts?: Array<any>;
  recording?: any;
  snapshots?: Array<any>;
}