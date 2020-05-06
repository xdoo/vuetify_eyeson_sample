<template>
  <v-container>
    <v-row align="start"> 
      <v-col>
        <v-text-field v-model="apikey" placeholder="API Key" solo></v-text-field>
      </v-col>
      <v-col>
        <v-btn @click="createRoom()">create Room</v-btn>
      </v-col>
    </v-row>
    <v-row>{{apikey}}</v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

// Service
import {VideoService} from "@/services/VideoService"

// Model
import {User} from "@/model/User"
import {Room} from "@/model/Room"
import {RoomResponse} from "@/model/RoomResponse"

@Component
export default class VideoConference extends Vue {

  apikey = ""
  response?: RoomResponse

  createRoom() {
    const room = new Room(new User("claus"))
    VideoService.createRoom(this.apikey, room)
    .then(res => {
      this.response = res.data
      console.log("response -> " + this.response)
    })
  }

}
</script>