<template>
  <nav class="relative bg-primary">
    <div class="container flex justify-between items-stretch">
      <div class="flex flex-no-shrink items-stretch h-16">
        <router-link to="/" class="flex-no-grow flex-no-shrink relative py-2 leading-normal no-underline flex items-center hover:font-bold text--lg">Brand</router-link>
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
            <router-link to="/typography" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-primary-light text--md">Item 1</router-link>
            <router-link to="/colors" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-primary-light text--md">Item 2</router-link>
            <router-link to="/buttons" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-primary-light text--md">Item 3</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      drawer: null,
      isOpen: false
    };
  }
};
</script>

<style>
nav a {
  @apply text-black;
}
nav a:visited {
  @apply text-black;
}
#nav-icon {
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
}
#nav-icon span {
  height: 2px;
  left: 25%;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

#nav-icon span:nth-child(1) {
  top: 40%;
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
  transform: rotate(45deg);
}

#nav-icon.open span:nth-child(3) {
  transform: rotate(-45deg);
}

#nav-icon.open span:nth-child(4) {
  top: 50%;
  width: 0%;
  left: 50%;
}
</style>
