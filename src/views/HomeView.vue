<template>
  <div class="home-view">
    <HeaderView />
    <div class="main-container">
      <div class="img-container">
        <img src="./../assets/photo.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderView from './../components/HeaderView';
export default {
  name: 'HomeView',
  components: {
    HeaderView,
  },
};
</script>

<style>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-container img {
  display: flex;
  max-width: 100%;
  max-height: 70vh;
  width: auto;
  height: auto;
  border-radius: 50px;
  margin-top: 100px;
}
</style>
