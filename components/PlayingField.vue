<template>
  <div class="main-block">
    <div class="playing-field">
      <div
        v-for="(letter, index) in letters"
        :key="index"
        class="playing-field-header"
      >
        <div
          v-for="(num, index) in numbers"
          :key="index"
          :id="`${letter}-${num}`"
          class="playing-field-body"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayingField',
  data() {
    return {
      letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>

<style lang="scss">
  .main-block {
    display: flex;
    width: 420px;
    justify-content: space-evenly;
  }

  .playing-field {
    display: grid;
    grid-template-columns: 35px 35px 35px 35px 35px 35px 35px 35px 35px 35px;
    grid-auto-flow: row;
    width: 350px;
    height: 100%;
    background: red;
    /*&-header {*/

    /*}*/
    &-body {
      width: 35px;
      height: 35px;
      border: 1px solid;
    }
  }
</style>
