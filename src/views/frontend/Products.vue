<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <main role="main">
        <div class="container">
          <!-- 商品列表 -->
          <div id="productsList" class="row">
            <!-- 單項商品 Card -->
            <div class="col-md-4" v-for="(item) in products" :key="item.id">
              <div class="card mb-4 shadow-sm" :data-id="item.id">
              <router-link :to="`/product/${ item.id }`"><span data-toggle="tooltip" title="了解商品"><img class="bd-placeholder-img card-img-top" width="100%" height="350px" :src="item.imageUrl[0]"
                  alt="商品圖片"></span></router-link>
                <div class="card-body">
                  <p class="productTitle text-left text-sensaicha font-weight-bold">{{ item.title }}</p>
                  <p class="productDescription text-left card-text text-muted">{{ item.content }}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="price-group">
                      <small class="orignal-price text-muted mr-1">NT. <span>{{ item.origin_price }}</span></small>
                      <span class="activity-price text-sensaicha">NT. <span>{{ item.price }}</span></span>
                    </div>
                    <div class="action-group">
                      <span data-toggle="tooltip" title="加入購物車"><a href="#" class="text-sensaicha p-1"><font-awesome-icon icon="shopping-cart"/></a></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End 商品列表 -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      fullPage: true,
      products: []
    }
  },
  // 建立一個生命週期
  created () {
    this.isLoading = true
    console.log('UUID', process.env.VUE_APP_UUID)
    console.log('APIPATH', process.env.VUE_APP_APIPATH) // process 是 node.js 中，取得環境變數的一個語法
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`) // http 前面加 $ 字號，是為了跟我們自己訂的方法產生衝突
      .then((res) => {
        this.isLoading = false
        console.log(res)
        this.products = res.data.data // 把產品列表資料綁進 products [] 陣列裡頭
      })
  }
}
</script>
