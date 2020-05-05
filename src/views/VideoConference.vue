<template>
  <v-container>
    <v-row align="start"> 
      <v-col>
        <v-text-field v-bind="apikey" placeholder="API Key" solo></v-text-field>
      </v-col>
      <v-col>
        <v-btn>create Room</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class VideoConference extends Vue {

  apikey = ""

}
</script>