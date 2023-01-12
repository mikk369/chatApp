<template>
  <HeaderView />
  <div class="signup-view">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <button
        v-on:click.prevent="Login()"
        type="submit"
        class="btn btn-primary"
        id="loggInButton"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import PocketBase from 'pocketbase';
import HeaderView from './../components/HeaderView.vue';
export default {
  name: 'login',
  components: {
    HeaderView,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async Login() {
      try {
        const pb = new PocketBase('http://127.0.0.1:8090');
        const LoggedInUser = await pb
          .collection('users')
          .authWithPassword(this.email, this.password);
        localStorage.setItem('user', LoggedInUser.record.email);
        this.$router.push('/chatapp');
        // console.log(LoggedInUser);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>

<style>
.signup-view {
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: center;
}

label {
  font-weight: 600;
  margin-right: 9px;
}
input {
  margin-bottom: 32px;
}
.form-control {
  padding: 9px;
}
</style>
