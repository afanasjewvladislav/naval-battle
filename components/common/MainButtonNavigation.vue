<template>
  <button 
    class="main-button-navigation" 
    @click="$emit('mainButton')"
  >
    <span class="post-title">{{ postTitle }}</span>
  </button>
</template>

<script>
export default {
  name: 'MainNavigationButton',
  props: {
    postTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.post-title {
  width: 58px;
  height: 10px;
  color: #ffffff;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.9px;
}

.main-button-navigation {
  background: #e39d37;
  width: 410px;
  height: 60px;
  border-radius: 30px;
  margin-top: 30px;
  outline: 0;
}

.main-button-navigation:hover {
  opacity: 0.7;
}
</style>