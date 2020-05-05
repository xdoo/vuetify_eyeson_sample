<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <span class="headline">VideoConf</span><span class="font-weight-light headline">Sample</span>

      <v-spacer></v-spacer>

      <v-icon title="blubbber...">mdi-flask-outline</v-icon>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class extends Vue{

}
</script>
