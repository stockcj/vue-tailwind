<template>
  <div>
    <div v-for="color in colors" :key="color">
      <div class="flex items-center color h-32 mb-4" :class="'bg-' + color.color">
        <div class="flex-1 text-center text--lg">{{ color.color }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorsDemo",
  data() {
    return {
      colors: [
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
