<template>
  <div id="app">
    <Toast />
    <router-view />
  </div>
</template>

<script>
import Toast from '@/components/Toasts.vue'
export default {
  name: 'App',
  components: {
    Toast
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import "./assets/main";

body {
    color: #5f6456;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  margin-bottom:20px ;

  a {
    text-decoration: none;
    color: #5f6456;

    &:hover {
      color:#a6a7a4 ;
    }

    &.router-link-exact-active {
      font-weight:bold;
      border-bottom: 2px solid #5f645691;
    }
  }
}
</style>
