<template>
  <div class="container">
    <header class="blog-header">
      <nav class="navbar navbar-expand-sm">
        <div class="navbar-left text-right">
          <ul class="navbar-nav text-uppercase">
            <li class="nav-item ml-auto mr-auto">
              <router-link to="/" class="nav-link font-weight-bold">首頁</router-link>
            </li>
            <li class="nav-item ml-auto mr-auto">
              <router-link to="/products" class="nav-link font-weight-bold">產品列表</router-link>
            </li>
          </ul>
        </div>
        <div class="navbar-center text-center">
          <router-link to="/" class="blog-header-logo">
            <picture>
              <source media="(min-width: 768px)" srcset="../../assets/imgs/logo.png" />
              <img class="img-responsive" src="../../assets/imgs/logo_sm.png" alt="Aiden's Garden">
            </picture>
          </router-link>
        </div>
        <div class="navbar-right text-left">
          <ul class="navbar-nav text-uppercase">
            <li class="nav-item ml-auto mr-auto">
              <router-link to="/about" class="nav-link font-weight-bold">關於我們</router-link>
            </li>
            <li class="nav-item ml-auto mr-auto">
              <span data-toggle="tooltip" title="查看購物車">
                <router-link to="/cart" class="nav-link">
                  <i class="fas fa-shopping-cart fa-lg"></i>
                  <span v-if="cart!==0" class="badge custom-badge">
                    {{ cart }}
                  </span>
                </router-link>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
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
