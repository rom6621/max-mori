<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>東京オリンピック 2021</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link :to="{ name:'index'}" style="text-decoration: none">
        <v-btn dark color="indigo">ホームへ</v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>
