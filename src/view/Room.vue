<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <v-icon>{{ sports[roomId-1].icon }}</v-icon>
            {{ sports[roomId-1].name }}
            <v-spacer></v-spacer>
            <v-btn color="error" @click="moriBtn">盛り上がり!!</v-btn>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8">
        <v-card :height="height" v-if="true">
          <v-card-title>グラフ</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <Graph class="mt-5" :height="height-190" :room-id="roomId" :chart-data="datacollection"></Graph>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card :height="height" v-if="true">
          <v-card-title>チャット</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <Chat :room-id="roomId"></Chat>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase'
import sports from "../assets/sports.json"
import Chat from '../components/Chat.vue'
import Graph from '../components/Graph.vue'

export default {
  name: 'Room',
  components: {
    Chat,
    Graph
  },
  data: () => ({
    roomId: undefined,
    height: window.innerHeight-180,
    sports: sports,
    graphFlg: true,
    comments: [],
    datacollection: {
      labels: [
          "30分前",
          "29分前",
          "28分前",
          "27分前",
          "26分前",
          "25分前",
          "24分前",
          "23分前",
          "22分前",
          "21分前",
          "20分前",
          "19分前",
          "18分前",
          "17分前",
          "16分前",
          "15分前",
          "14分前",
          "13分前",
          "12分前",
          "11分前",
          "10分前",
          "9分前",
          "8分前",
          "7分前",
          "6分前",
          "5分前",
          "4分前",
          "3分前",
          "2分前",
          "1分前",
      ]
    },
    datasets: [
      {
        label: '盛り上がり度',
        data: []
      }
    ]
  }),
  methods: {
    moriBtn: function() {
      firebase.database().ref('rooms/' + this.roomId + '/comments').push({
        contents: '',
        createAt: Date.now(),
        weight: 1
      })
    },
    switchDisplay: function() {
      if(this.graphFlg) this.graphFlg=false
      else this.graphFlg=true
    }
  },
  created() {
    this.roomId = this.$route.params['id']
  },
  updated() {
    document.getElementById('chatBox').scrollTo(0, document.getElementById('chatBox').scrollHeight)
  },
  mounted() {
    firebase.database().ref("rooms/" + this.roomId).on("value", (snapshot) => {
      let room = snapshot.val();
      this.comments = room.comments;
    })
    setInterval(()=> {
      const weight = new Array(30)
      weight.fill(0)
      const now = Math.floor(Date.now()/(60*1000))
      for(let key in this.comments) {
        let comment = this.comments[key]
        let difference = now-Math.floor(comment.createAt/(60*1000))
        if(difference < 30){
          weight[29-difference] += comment.weight
        }
      }
      this.datacollection = {
        labels: [
          "29分前",
          "28分前",
          "27分前",
          "26分前",
          "25分前",
          "24分前",
          "23分前",
          "22分前",
          "21分前",
          "20分前",
          "19分前",
          "18分前",
          "17分前",
          "16分前",
          "15分前",
          "14分前",
          "13分前",
          "12分前",
          "11分前",
          "10分前",
          "9分前",
          "8分前",
          "7分前",
          "6分前",
          "5分前",
          "4分前",
          "3分前",
          "2分前",
          "1分前",
          "0分前"
        ],
        datasets: [
          {
            label: "盛り上がり度",
            data: weight
          },
        ],
      }
    }, 1000)
  }
}
</script>