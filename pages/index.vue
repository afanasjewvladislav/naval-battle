<template>
  <div id="app">
    <v-app>
      <div class="navigation-panel">
        <main-navigation-button 
          @mainButton="goToStatistics"
          postTitle="Статистика"
        />
        <main-navigation-button 
          @mainButton="startSingle"
          postTitle="Одиночная игра"
        />
        <main-navigation-button 
          @mainButton="startMultiplayer"
          postTitle="Многопользовательская игра"
        />
      </div>
      <router-view></router-view>
    </v-app>
  </div>
</template> 

<script>
import mainNavigationButton from '../components/common/MainButtonNavigation.vue';

export default {
  components: {
    mainNavigationButton,
  },
  methods: {
    goToStatistics() {
      this.$router.push({ path: 'Statistics' });
    },
    startSingle() {
      this.$router.push({ path: 'Single' });
    },
    startMultiplayer() {
      this.$router.push({ path: 'Multiplayer' });
    },
  }
}
</script>

<style lang="scss">
  html {
    overflow-x: auto;
  }
  .v-application--wrap {
    position: relative;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    min-height: 100vh;
    max-width: 100%;
    background:url('../images/main-background.jpg');
  }

  .navigation-panel {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding-top: 200px; 
  }

</style>
