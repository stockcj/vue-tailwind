<template>
  <div>
    <div v-for="button in buttons" :key="button">
      <div>
        <div>
        </div>
      </div>
    </div>
      <div class="grd">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ButtonsDemo"
};
</script>

<style lang="scss">
.grd {
  @include grid;
  grid-auto-rows: 120px;

  @media only screen and (min-width: 600px) {
    @include gridLayout((7, 2), (5, 1), (5, 1), (12, 1));
  }
}
.grd {
  max-width: 1000px;
  margin: 0 auto;

  > div:nth-of-type(1) {
    background-color: #ead8c2;
  }

  > div:nth-of-type(2) {
    background-color: #4f8365;
  }

  > div:nth-of-type(3) {
    background-color: #eca414;
  }

  > div:nth-of-type(4) {
    background-color: #3a568c;
  }

  > div:not(:first-of-type) {
    color: white;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
