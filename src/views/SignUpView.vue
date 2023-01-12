<template>
  <HeaderView />
  <div class="signup-view">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="emailInput"
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
          id="passwordInput"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">passwordConfirm</label>
        <input
          type="password"
          class="form-control"
          id="passwordConfirm"
          placeholder="passwordConfirm"
          v-model="passwordConfirm"
        />
      </div>

      <button
        v-on:click.prevent="signUp()"
        type="submit"
        class="btn btn-primary"
        id="signUpButton"
      >
        Signup
      </button>
    </form>
  </div>
</template>

<script>
import PocketBase from 'pocketbase';
import HeaderView from './../components/HeaderView.vue';
export default {
  name: 'signup',
  data() {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
    };
  },
  components: {
    HeaderView,
  },
  methods: {
    async signUp() {
      try {
        const pb = new PocketBase('http://127.0.0.1:8090');
        const user = await pb.collection('users').create({
          email: this.email,
          password: this.password,
          passwordConfirm: this.passwordConfirm,
        });
        console.log(user);
      } catch (error) {
        console.error(error);
      }
      this.$router.push('/login');
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
