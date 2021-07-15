<template>
  <v-container>
    <v-row>
      <v-col>
        <h2 class="mb-5">盛り上がりランキング</h2>
        <v-card>
          <v-list-item-group>
            <template v-for="(i, j) in ranking">
              <router-link :key="i" :to="{ name:'room', params:{id:sports[i.No].id}}" style="text-decoration: none;">
                <v-list-item>
                    <v-list-item-icon>
                      <v-icon>{{ j+1 }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-icon>{{ sports[i.No].icon }}</v-icon>
                        {{ sports[i.No].name }}
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        {{ i.weight }}票
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
  props: ["ranking"],
  data: () => ({
    sports: sports,
  }),
  computed: {},
  method: {},
  mounted() {},
  created() {},
};
</script>