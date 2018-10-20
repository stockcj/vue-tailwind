<template>
  <div>
    <div v-for="button in buttons" :key="button">
      <div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonsDemo",
  data() {
    return {
      buttons: [
        { color: "primary" },
        { color: "primary-light" },
        { color: "primary-dark" },
        { color: "accent" },
        { color: "accent-light" },
        { color: "accent-dark" },
        { color: "warning" },
        { color: "error" },
        { color: "success" }
      ]
    };
  }
};
</script>

<style>
</style>