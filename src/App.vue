<template>
  <div id="app">
    <div class="bg-green-lighter" id="nav">
      <div class="container py-6">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <div class="container content py-6">
      <transition-page> 
        <router-view/>
      </transition-page>
    </div>
    <footer class="bg-green-lighter">
      <div class="container py-6">2018</div>
    </footer>
  </div>
</template>

<script>
import TransitionPage from "./transitions/TransitionPage.vue";
export default {
  name: "App",
  components: {
    TransitionPage
  }
};
</script>

<style>
@import url("./assets/css/main.css");
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.content {
  flex: 1;
}
</style>
