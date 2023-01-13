<template>
  <HeaderView />
  <div class="main-chat">
    <div class="card mt-3">
      <div class="card-body">
        <div class="card-title">
          <h3>Chat Group</h3>
          <hr />
        </div>
        <div class="chat-messages">
          <ul id="chatbox" class="chat-container">
            <li
              v-for="message in messages"
              :key="message.id"
              v-bind:class="{ 'sent-by-me': sentByMe(message) }"
            >
              <b>{{ message.username }}</b>
              <span class="msg-color"> {{ message.message }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-footer">
        <form @submit.prevent="sendMessage">
          <div class="gorm-group pb-3">
            <label for="message">Message:</label>
            <input
              id="textInput"
              type="text"
              v-model="message"
              class="form-control"
            />
          </div>
          <button id="sendMessage" type="submit" class="btn btn-success">
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderView from './HeaderView.vue';
import io from 'socket.io-client';
import PocketBase from 'pocketbase';
export default {
  name: 'chatapp',
  components: {
    HeaderView,
  },
  data() {
    return {
      message: '',
      messages: [],
      username: '',
      userId: '',
    };
  },
  created() {
    this.socket = io('http://127.0.0.1:3000');
    this.username = localStorage.getItem('user');
    this.userId = localStorage.getItem('userId');
    // sends username to server before messages so it can be used to broadcast 'Has joined message'
    this.socket.emit('join', this.username);
  },
  mounted() {
    // pushes message to messageS array
    this.socket.on('message', (message) => {
      this.messages.push(message);
    });
  },
  methods: {
    async sendMessage() {
      // Save message to the database
      const data = {
        text: this.message,
        user: this.userId,
      };
      try {
        const pb = new PocketBase('http://127.0.0.1:8090');
        const record = await pb.collection('messages').create(data);
        console.log('Message saved successfully to the database: ', record);
      } catch (err) {
        console.log('Error saving message to the database: ', err);
      }

      // Send message to the server
      this.socket.emit('message', {
        username: this.username,
        message: this.message,
      });
      this.message = '';
    },
    sentByMe(message) {
      return message.username === this.username;
    },
  },
};
</script>

<style>
.sent-by-me {
  text-align: left;
  margin-left: 19rem;
}
#chatbox li {
  padding: 9px;
}
.msg-color {
  background-color: rgb(228, 228, 228);
  padding: 9px;
  border-radius: 9px;
  margin-left: 9px;
}
.main-chat {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
.main-title {
  padding: 20px;
}
.card {
  width: 1000px;
  height: 500px;
}
.chat-container {
  box-sizing: border-box;
  height: 400px;
  overflow-y: scroll;
}
.chat-container li {
  list-style: none;
}
</style>
