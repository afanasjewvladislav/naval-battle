<template>
  <div class="message">
    <!-- <h1>Раздел в разработке!</h1> -->
    <playing-field />
    <playing-field />
  </div>
</template>

<script>
import PlayingField from '../components/PlayingField.vue';

export default {
  components: {
    PlayingField,
  },
};
</script>

<style lang="scss">
.message {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 760px;
}
</style>
