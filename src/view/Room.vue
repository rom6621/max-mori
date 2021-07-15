<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <v-card>
          <v-card-title>
            <v-row>
              <v-col cols="7">
                <v-icon>{{ sports[roomId].icon }}</v-icon>
                {{ sports[roomId].name }}
              </v-col>
              <v-col>
                <v-spacer></v-spacer>
              </v-col>
              <v-col>
                <v-btn color="error" block @click="moriBtn">盛り上がり!!</v-btn>
              </v-col>
            </v-row>
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <Graph :chart-data="datacollection"></Graph>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title>
            <v-row>
              <v-col>
                チャット
              </v-col>
              <v-col>
                <v-spacer></v-spacer>
              </v-col>
            </v-row>
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <Chat :roomId="roomId"></Chat>
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
    sports: sports,
    count: 0,
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
  },
  created() {
    this.roomId = this.$route.params['id']
  },
  mounted() {
    firebase.database().ref("rooms/" + this.roomId).on("value", (snapshot) => {
      let room = snapshot.val();
      this.comments = room.comments;
    })
    setInterval(()=> {
      this.count++;
      this.datacollection = {
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
        ],
        datasets: [
          {
            label: "盛り上がり度",
            data: [1, 2, this.count]
          },
        ],
      }
      console.log(this.datacollection.datasets[0].data);
    }, 1000)
  }
}
</script>