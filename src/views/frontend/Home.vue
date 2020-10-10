<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/frontend/Header.vue'
import Footer from '@/components/frontend/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  data () {
    return {
    }
  }
}
</script>
