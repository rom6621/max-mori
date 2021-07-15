<template>
  <v-container>
    <v-row>
      <v-col>
        <h2 class="mb-5">オリンピック競技</h2>
        <v-row>
          <v-col v-for="i in 33" :key="i" cols="12" sm="6" xl="4">
            <router-link :to="{ name:'room', params:{id:sports[i-1].id}}" style="text-decoration: none;">
              <v-card hover>
                <v-card-title>
                  <v-icon>{{ sports[i-1].icon }}</v-icon>
                  {{ sports[i-1].name }}
                </v-card-title>
                <v-card-subtitle>
                  過去10分の投票：{{ roomWeight[i-1] }}票
                </v-card-subtitle>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import sports from "../assets/sports.json";

export default {
  name: "SportsList",
  data: () => ({
    rank: [],
    sports: sports,
  }),
  props: ["roomWeight"],
  computed: {},
  method: {},
  mounted() {},
  created() {},
};
</script>