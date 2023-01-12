<template>
  <div class="header-wrap">
    <nav class="navbar navbar-expand-lg py-4">
      <div class="container-fluid">
        <h1>ChatApp</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <button v-if="!isLogged">
                <router-link to="/">Home</router-link>
              </button>
            </li>
            <li class="nav-item">
              <button class="login" v-if="!isLogged">
                <router-link to="/login">Login</router-link>
              </button>
            </li>
            <li class="nav-item">
              <button class="sign-up" v-if="!isLogged">
                <router-link to="/signup">Signup</router-link>
              </button>
            </li>
            <li class="nav-item">
              <button id="logOutButton" class="log-out" v-if="isLogged">
                <router-link to="/" @click="loggedOut()">Logout</router-link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'headerview',
  computed: {
    isLogged() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    loggedOut() {
      this.$store.commit('logout');
    },
  },
  mounted() {
    this.$store.commit('authorized');
  },
};
</script>

<style></style>

<style>
.collapse {
  flex-direction: row-reverse;
}
.navbar-nav button {
  font-size: 22px;
  font-weight: 400;
  border: none;
  margin: 0px 9px 9px 9px;
  border-radius: 16px;
  padding: 5px 25px 5px 25px;
}

button a {
  color: #2c3e50 !important;
  text-decoration: none;
}

.header-view {
  justify-content: space-between;
  display: flex;
  padding: 20px;
}
</style>
