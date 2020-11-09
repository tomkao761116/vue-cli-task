<template>
  <header>
    <div class="container padding-ag">
      <nav class="navbar navbar-expand-lg w-100">
        <router-link to="/" class="d-lg-none" href="#"><img src="../../assets/imgs/logo_sm.png" alt="Aiden's Garden" width="100"></router-link>
        <div class="d-flex order-lg-1 ml-auto">
          <span data-toggle="tooltip" title="查看購物車">
            <router-link to="/cart">
              <i class="fas fa-shopping-cart fa-lg"></i>
              <span v-if="cart!==0" class="badge custom-badge">
                {{ cart }}
              </span>
            </router-link>
          </span>
        </div>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item"><router-link to="/" class="nav-link">首頁</router-link></li>
              <li class="nav-item"><router-link to="/products" class="nav-link">產品列表</router-link></li>
            </ul>
            <ul class="navbar-nav d-none d-lg-block px-4">
              <li class="nav-item m-0"><router-link to="/"><img src="../../assets/imgs/logo.png" alt="Aiden's Garden" width="180"></router-link></li>
            </ul>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item"><router-link to="/about" class="nav-link">關於我們</router-link></li>
            </ul>
          </div>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      cart: 0,
      uuid: process.env.VUE_APP_UUID
    }
  },
  created () {
    this.getCart()
    this.$bus.$on('update-total', () => {
      this.getCart()
    })
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/ec/shopping`
      this.$http
        .get(url)
        .then((res) => {
          this.cart = res.data.data.length
        })
    }
  }
}

</script>
