<template>
  <div>
    <Swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide class="col-md-3"
        v-for="item in related"
        :key="item.id"
      >
        <!-- 單項商品 Card -->
          <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top imagetoHover-sm" :src="item.imageUrl[0]"
              alt="商品圖片">
            <div class="middleButton">
              <a href="#" @click.prevent="switchProduct(item.id)">
                <div class="hoverText">查看商品</div>
              </a>
            </div>
            <div class="card-body">
              <p class="productTitle text-left text-sensaicha font-weight-bold">{{ item.title }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="price-group">
                  <small class="orignal-price text-muted mr-1">NT. <span>{{ item.origin_price | currency }}</span></small>
                  <span class="activity-price text-sensaicha">NT. <span>{{ item.price | currency }}</span></span>
                </div>
              </div>
            </div>
          </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {

  data () {
    return {
      products: [],
      uuid: process.env.VUE_APP_UUID,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    product: {
      type: Object
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      this.$http.get(`${process.env.VUE_APP_APIPATH}api/${this.uuid}/ec/products`) // http 前面加 $ 字號，是為了跟我們自己訂的方法產生衝突
        .then((res) => {
          this.products = res.data.data // 把產品列表資料綁進 products [] 陣列裡頭
        })
    },
    switchProduct (id) {
      this.$router.push(`/product/${id}`)
      this.$emit('update')
    }
  },
  computed: {
    related () {
      return this.products.filter(
        (item) => item.id !== this.product.id && item.category === this.product.category
      )
    },
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
