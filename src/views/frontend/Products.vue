<template>
  <div class="main-area container">
    <loading :active.sync="isLoading"></loading>
    <main role="main">
      <!-- 商品列表 -->
        <div class="row position-relative">
          <nav class="typeSideBar col-md-3 mb-5">
            <ul
              class="list-group sticky-top"
            >
              <li class="list-group-item p-xy-0">
                <a
                  data-toggle="tab"
                  href="#"
                  class="list-btn active"
                  @click.prevent="filterType = ''"
                ><i class="fas fa-seedling mr-2"></i>全部商品</a>
              </li>
              <li class="list-group-item p-xy-0">
                <a
                  data-toggle="tab"
                  href="#"
                  class="list-btn"
                  @click.prevent="filterType = '多肉植物'"
                ><i class="fas fa-seedling mr-2"></i>多肉植物</a>
              </li>
              <li class="list-group-item p-xy-0">
                <a
                  data-toggle="tab"
                  href="#"
                  class="list-btn"
                  @click.prevent="filterType = '觀葉植物'"
                ><i class="fas fa-seedling mr-2"></i>觀葉植物</a>
              </li>
              <li class="list-group-item p-xy-0">
                <a
                  data-toggle="tab"
                  href="#"
                  class="list-btn"
                  @click.prevent="filterType = '香草植物'"
                ><i class="fas fa-seedling mr-2"></i>香草植物</a>
              </li>
            </ul>
          </nav>
          <div class="productsList col-md-9">
            <h1 class="h3 text-left" v-if="filterType === ''">
              全部商品
            </h1>
            <h1 class="h3 text-left" v-else>
              {{ filterType }}
            </h1>
            <hr>
            <div class="row justify-content-start">
              <!-- 單項商品 Card -->
              <div class="col-lg-4 col-md-6" v-for="(item) in getFilter" :key="item.id">
                <router-link :to="`/product/${ item.id }`">
                  <div class="card mb-4 shadow-sm" :data-id="item.id">
                    <div class="card-img-top imagetoHover" :style="{ backgroundImage:`url(${ item.imageUrl[0] })` }"
                    ></div>
                      <div class="middleButton">
                        <div class="hoverText">查看商品</div>
                      </div>
                    <div class="card-body">
                      <h2 class="h6 productTitle text-left font-weight-bold">{{ item.title }}</h2>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="price-group">
                          <h3 class="h6 orignal-price text-muted mr-1"><small >NT{{ item.origin_price | currency }}</small></h3>
                          <h3 class="h6 activity-price">NT{{ item.price | currency }}</h3>
                        </div>
                        <div class="action-group">
                          <span data-toggle="tooltip" title="加入購物車">
                            <a href="#" class="p-1" @click.prevent="addtoCart(item.id)">
                              <i class="fas fa-shopping-cart"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="col-md-12 d-flex justify-content-center">
                <pagination :pages="pagination" class=" mt-4" @emit-pages="getProducts" v-if="products.length >= 25"></pagination>
              </div>
            </div>
          </div>
        </div>
        <!-- End 商品列表 -->
    </main>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'

export default {
  data () {
    return {
      isLoading: false,
      fullPage: true,
      products: [],
      filterType: '',
      filterProducts: [],
      pagination: {},
      carts: {},
      uuid: process.env.VUE_APP_UUID
    }
  },
  components: {
    Pagination
  },
  // 建立一個生命週期
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (pages = 1) {
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_APIPATH}api/${this.uuid}/ec/products?page=${pages}`) // http 前面加 $ 字號，是為了跟我們自己訂的方法產生衝突
        .then((res) => {
          this.isLoading = false
          this.products = res.data.data // 把產品列表資料綁進 products [] 陣列裡頭
          this.pagination = res.data.meta.pagination
          const { categoryName } = this.$route.params
          if (categoryName) {
            this.filterType = categoryName
          }
        })
    },
    addtoCart (id, quantity = 1) {
      this.isLoading = true

      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/ec/shopping`
      const cart = {
        product: id,
        quantity
      }

      this.$http.post(url, cart).then(() => {
        this.isLoading = false
        this.$bus.$emit('update-total')
        this.$bus.$emit('message:push',
          '已成功加入購物車',
          'success')
      }).catch((err) => {
        const errorList = err.response.data.errors

        errorList.forEach((err) => {
          this.isLoading = false
          this.$bus.$emit('message:push',
            `加入購物車失敗
            ${err}`,
            'danger')
        })
      })
    }
  },
  computed: {
    getFilter () {
      let filterProducts = []
      switch (this.filterType) {
        case '多肉植物':
          filterProducts = this.products.filter((item) => item.category === '多肉植物')
          break
        case '觀葉植物':
          filterProducts = this.products.filter((item) => item.category === '觀葉植物')
          break
        case '香草植物':
          filterProducts = this.products.filter((item) => item.category === '香草植物')
          break
        default:
          filterProducts = this.products
          break
      }
      return filterProducts
    }
  }
}
</script>
