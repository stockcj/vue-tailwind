<template>
  <div id="app">
    <nav class="relative bg-green-lighter">
      <div class="container flex justify-between items-stretch">
        <div class="flex flex-no-shrink items-stretch h-16">
          <router-link to="/" class="flex-no-grow flex-no-shrink relative py-2 leading-normal no-underline flex items-center hover:font-bold">Brand</router-link>
        </div>
        <div id="nav-icon" class="md:hidden w-16 h-16 relative cursor-pointer" :class="{ open: isOpen }" @click.stop="isOpen = !isOpen">
          <span class="block absolute bg-black w-1/2 opacity-100"></span>
          <span class="block absolute bg-black w-1/2 opacity-100"></span>
          <span class="block absolute bg-black w-1/2 opacity-100"></span>
          <span class="block absolute bg-black w-1/2 opacity-100"></span>
        </div>
        <div class="hidden">
          <button class="cursor-pointer w-16 h-16 p-4" @click.stop="drawer = !drawer" v-show="!drawer">
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
          <button class="cursor-pointer w-16 h-16 p-4" @click.stop="drawer = !drawer" v-show="drawer">
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
          </button>
        </div>
        <div class="hidden md:flex md:flex-no-shrink md:items-stretch">
          <div class="md:flex md:items-stretch md:justify-end ml-auto">
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-green-light">Item 1</a>
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-green-light">Item 2</a>
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-green-light">Item 3</a>
          </div>
      </div>
      </div>
    </nav>
    <!-- <div class="bg-green-lighter" id="nav">
      <div class="container py-6">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div> -->
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
  data() {
    return {
      drawer: null,
      isOpen: false
    };
  },
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
.content {
  flex: 1;
}
#nav-icon {
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
}
#nav-icon span {
  height: 2px;
  left: 25%;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon span:nth-child(1) {
  top: 40%
}

#nav-icon span:nth-child(2),
#nav-icon span:nth-child(3) {
  top: 50%;
}

#nav-icon span:nth-child(4) {
  top: 60%;
}
#nav-icon.open span:nth-child(1) {
  top: 50%;
  width: 0%;
  left: 50%;
}

#nav-icon.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon.open span:nth-child(4) {
  top: 50%;
  width: 0%;
  left: 50%;
}
</style>
