<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="container content py-6">
      <transition-page> 
        <router-view/>
      </transition-page>
    </div>
    <footer class="bg-primary">
      <div class="container py-6">2018</div>
    </footer>
  </div>
</template>

<script>
import TransitionPage from "./transitions/TransitionPage.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    TransitionPage,
    NavBar
  }
};
</script>

<style lang="scss">
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.content {
  flex: 1;
}
</style>
