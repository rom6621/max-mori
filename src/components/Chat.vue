<template>
  <v-container fluid style="height: 100%">
    <v-row justify="center" style="height: 80%" class="overflow-y-auto" id="chatBox">
      <v-col cols="12" v-for="comment in comments" :key="comment.id">
          <v-card>
            <v-card-title>{{ comment.contents }}</v-card-title>
          </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-text-field v-model="textField"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn fab dark absolute color="indigo" @click="submit"><v-icon dark>mdi-send</v-icon></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Chat",
  props: ["sport", "roomId"],
  data: () => ({
    textField: "",
    comments: [],
  }),
  methods: {
    submit: function () {
      let weight = 0;
      if (this.textField.length > 0) {
        for (let i = 0; i < this.textField.length; i++) {
          if (this.textField[i] === "!") weight = weight + 1;
        }
        firebase
          .database()
          .ref("rooms/" + this.roomId + "/comments")
          .push({
            contents: this.textField,
            createAt: Date.now(),
            weight: weight + 2,
          });
        this.textField = "";
      } else {
        alert("コメントが入力されていません");
      }
    },
  },
  mounted() {
    firebase
      .database()
      .ref("rooms/" + this.roomId)
      .on("value", (snapshot) => {
        let room = snapshot.val();
        this.comments = [];
        for (let key in room.comments) {
          if (room.comments[key].contents != "")
            this.comments.push(room.comments[key]);
        }
      });
  },
};
</script>