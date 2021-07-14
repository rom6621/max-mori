<template>
  <v-container fluid style="padding: 0px">
    <v-row justify="center">
      <v-col cols="12">
        <Header style="padding: 0px"></Header>
      </v-col>
      <v-col cols="11" sm="3">
        <Ranking></Ranking>
      </v-col>
      <v-col cols="11" sm="7">
        <SportsList></SportsList>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import Ranking from '../components/Ranking.vue'
import SportsList from '../components/SportsList.vue'
import Header from '../components/Header.vue'

export default {
  name: "Index",
  components: {
    Ranking,
    SportsList,
    Header
  },
  data: () => ({}),
  computed: {},
  method: {},
  mounted() {},
  created() {},
};
</script>