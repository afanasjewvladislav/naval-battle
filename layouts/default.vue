<template>
  <div>
    <nuxt />
    <v-footer
        absolute
        dark
      >
        <div class="text-footer">
          <div>{{ new Date().getFullYear() }}</div>
        </div>
      </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style scss>
  .text-footer {
    display: flex;
    justify-content: center;
    width: 100%;
  }
</style>
