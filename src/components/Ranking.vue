<template>
  <v-container>
    <v-row>
      <v-col>
        <h2 class="mb-5">盛り上がりランキング</h2>
        <v-card>
          <v-list-item-group>
            <template v-for="(i, j) in rank">
              <router-link :key="i" :to="{ name:'room', params:{id:sports[i-1].id}}" style="text-decoration: none;">
                <v-list-item>
                    <v-list-item-icon>
                      <v-icon>{{ j+1 }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-icon>{{ sports[i-1].icon }}</v-icon>
                        {{ sports[i-1].name }}
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        100票
                      </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
              </router-link>
            </template>
          </v-list-item-group>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import sports from "../assets/sports.json";

export default {
  name: "Ranking",
  data: () => ({
    rank: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sports: sports,
  }),
  computed: {},
  method: {},
  mounted() {},
  created() {},
};
</script>