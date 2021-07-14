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

export default {
  name: 'Room',
  components: {
    Chat
  },
  data: () => ({
    roomId: undefined,
    sports: sports,
  }),
  methods: {
    moriBtn: function() {
      firebase.database().ref('rooms/' + this.roomId + '/comments').push({
        contents: '',
        createAt: Date.now(),
        weight: 1
      })
    }
  },
  created() {
    this.roomId = this.$route.params['id']
  }
}
</script>