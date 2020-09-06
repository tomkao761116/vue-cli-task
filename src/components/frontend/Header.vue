<template>
  <div>
    <div class="container">
      <header class="blog-header">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4">
          </div>
          <div class="col-4 d-flex justify-content-center align-items-center">
            <a class="blog-header-logo" href="#"><img class="img-responsive" src="../../assets/imgs/logo.png" alt="Aiden's Garden"></a>
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
            <span data-toggle="tooltip" title="查看購物車"><router-link to="/cart" class="text-sensaicha p-2 ml-2 mr-2"><i
                  class="fas fa-shopping-cart fa-lg"></i>
                  <span class="badge custom-badge">
                    {{ cart }}
                  </span>
                  </router-link></span>
          </div>
        </div>
      </header>
      <div class="nav-scroller">
        <nav>
          <div id="nav">
            <ul class="nav d-flex justify-content-center text-uppercase">
              <li class="nav-item ag-item">
                <router-link to="/" class="nav-link pl-4 pr-4 ml-3 mr-3">首頁</router-link>
              </li>
              <li class="nav-item ag-item">
                <router-link to="/products" class="nav-link pl-4 pr-4 ml-3 mr-3">產品列表</router-link>
              </li>
              <li class="nav-item ag-item">
                <router-link to="/about" class="nav-link pl-4 pr-4 ml-3 mr-3">關於我們</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
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
