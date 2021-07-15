<template>
  <v-container fluid style="padding: 0px">
    <v-row justify="center">
      <v-col cols="12">
        <Header style="padding: 0px"></Header>
      </v-col>
      <v-col cols="11" sm="3">
        <Ranking :ranking="ranking"></Ranking>
      </v-col>
      <v-col cols="11" sm="7">
        <SportsList :room-weight="roomWeight"></SportsList>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import Ranking from '../components/Ranking.vue'
import SportsList from '../components/SportsList.vue'
import Header from '../components/Header.vue'
import firebase from 'firebase'

export default {
  name: "Index",
  components: {
    Ranking,
    SportsList,
    Header
  },
  data: () => ({
    rooms: [],
    roomWeight: [],
    ranking: []
  }),
  method: {},
  mounted() {
    firebase.database().ref("rooms").on("value", (snapshot) => {
      this.rooms = snapshot.val();
    })
    setInterval(()=> {
      this.roomWeight = new Array(33)
      this.roomWeight.fill(0)
      const now = Math.floor(Date.now()/(60*1000))
      for(let roomKey in this.rooms) {
        let room = this.rooms[roomKey]
        let sumWeight = 0;
        let comments = room.comments
        for(let commentKey in comments) {
          let comment = comments[commentKey]
          let difference = now-Math.floor(comment.createAt/(60*1000))
          if(difference < 10){
            sumWeight = sumWeight+comment.weight
          }
        }
        this.roomWeight[roomKey-1] = sumWeight
      }
      this.ranking = []
      for(let i=0; i<this.roomWeight.length; i++) {
        this.ranking.push({"No": i, "weight": this.roomWeight[i]})
      }
      this.ranking.sort((a, b) => {
        if(a.weight>b.weight) return -1
        if(a.weight<b.weight) return 1
        return 0
      })
    }, 1000)
  }
};
</script>