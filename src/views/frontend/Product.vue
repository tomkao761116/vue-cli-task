<template>
  <div class="main-area container">
    <loading :active.sync="isLoading"></loading>
    <main role="main" class="py-5">
      <div class="row d-flex justify-content-start align-items-center">
        <div class="productImage col-md-6 align-self-center">
          <div class="ag-image  text-center"  :style="{ backgroundImage:`url(${ product.imageUrl[0] })` }"></div>
        </div>
        <div class="productInfo col-md-6 pt-2 pl-5 pr-5 text-left">
          <div class="productTitle mb-3">
            <h4 class="font-weight-bold">{{ product.title }}</h4>
          </div>
          <div class="productContent mt-3 mb-3">
            <p>{{ product.description }}</p>
          </div>
          <div class="productPrice">
            <span  v-if="product.origin_price !== 0" class="orignal-price text-muted mr-4">
              NT{{ product.origin_price | currency }}
              </span>
              <span class="h5 activity-price">
                NT{{product.price | currency }}
              </span>
          </div>
          <form class="buyFunction">
            <div class="form-group row d-flex align-items-end">
              <label for="quantity" class="col-lg-2 col-form-label text-muted mt-2 mb-2 text-center">數量</label>
              <div class="col-lg-5 mt-2 mb-2">
                <select id="quantity" class="form-control" v-model="product.num">
                  <option value="0" disabled>
                    請選擇數量
                  </option>
                  <option :value="num" v-for="num in 10" :key="num">
                    {{ num }} {{ product.unit }}
                  </option>
                </select>
              </div>
              <div class="col-lg-5 text-center mt-2 mb-2">
                <button type="button" class="addToCart btn btn-primary btn-block" :disabled=" status.loadingItem === product.id"
                @click.prevent="addtoCart(product.id, product.num)"
                >
                <i class="fas fa-spinner fa-spin"
                v-if="product.id === status.loadingItem"/>
                加入購物車</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <hr>
      <div class="productDescription row d-flex justify-content-start align-items-center">
        <div class="col-sm-12  mt-4 mb-4">
          <div class="form-group row text-left">
            <h5 for="content" class="col-sm-3 col-form-label text-muted"><strong>商品描述</strong></h5>
            <div id="content" class="col-sm-9">
              <p>
                「盆栽」均為組合商品，包含一標準花器</p>
              <p v-html="product.content"></p>
            </div>
          </div>
          <div class="form-group row text-left">
            <h5 for="notice" class="col-sm-3 col-form-label text-muted"><strong>商品注意事項</strong></h5>
            <div id="notice" class="col-sm-9 ">
              <p>
                植栽是有生命的，會受到各種外在及生長因素影響，故高度僅供參考
              </p>
            </div>
          </div>
          <div class="form-group row text-left">
            <h5 for="precautions" class="col-sm-3 col-form-label text-muted"><strong>盆栽照顧小叮嚀</strong></h5>
            <div id="precautions" class="col-sm-9 ">
              <p>
                1.多肉類植物雖然很耐旱，但依舊需要定期幫他補充水份，才會生長的好喔
              </p>
              <p>
                2.當發現盆栽的葉片都塌陷下來，這代表他太久沒有水喝，相當口渴囉，請馬上幫他補充些水份
              </p>
              <p>
                3.如果有葉子突然發黑或變黃，這可能是過度澆水造成的，請調整水量
              </p>
              <p>
                4.沒事時可以對盆栽說說話，告訴他今天發生了什麼開心或不開心的事，他會很高興成為你傾訴的對象
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="relatedProducts row d-flex justify-content-start align-items-center">
        <div class="col-sm-12">
          <div class="row text-left">
            <div class="col-sm-12">
              <h5 class="text-muted mb-4"><strong>其他款式</strong></h5>
              <relatedProducts
                :product="product"
                @update="getProduct" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import relatedProducts from '@/components/frontend/RelatedProducts.vue'

export default {
  name: 'Product',
  data () {
    return {
      isLoading: false,
      fullPage: true,
      product: {
        num: 1,
        imageUrl: []
      },
      status: {
        loadingItem: ''
      },
      uuid: process.env.VUE_APP_UUID
    }
  },
  components: {
    relatedProducts
  },
  created () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      this.isLoading = true
      const { id } = this.$route.params // 用解構的方式取得 id
      this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
        .then((res) => {
          this.product = res.data.data // 把產品列表資料綁進 products [] 陣列裡頭
          this.$set(this.product, 'num', 1)
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    },
    addtoCart (id, quantity = 1) {
      this.status.loadingItem = id

      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/ec/shopping`

      const cart = {
        product: id,
        quantity
      }

      this.$http.post(url, cart).then(() => {
        this.status.loadingItem = ''
        this.$bus.$emit('update-total')
        this.$bus.$emit('message:push',
          '已成功加入購物車',
          'success')
      }).catch((err) => {
        const errorList = err.response.data.errors

        errorList.forEach((err) => {
          this.status.loadingItem = ''
          this.$bus.$emit('message:push',
            `加入購物車失敗
            ${err}`,
            'danger')
        })
      })
    }
  }
}
</script>
