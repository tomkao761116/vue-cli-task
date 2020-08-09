<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <main role="main">
        <div class="py-5">
          <div class="container">
            <div class="row d-flex justify-content-start align-items-center">
              <div class="productImage col-sm-6">
                <img class="bd-placeholder-img card-img-top" width="100%" height="500px" :src="product.imageUrl[0]"
                    alt="商品圖片">
              </div>
              <div class="productInfo col-sm-6 pt-2 pl-5 pr-5 text-left">
                <div class="productTitle mb-3">
                  <h4 class="text-sensaicha font-weight-bold">{{ product.title }}</h4>
                </div>
                <div class="productContent mt-3 mb-3">
                  <p class="text-sensaicha">{{ product.content }}</p>
                </div>
                <div class="productPrice">
                  <span class="orignal-price text-muted mr-4">NT.{{ product.origin_price }}</span>
                  <span class="h5 activity-price text-sensaicha">NT.{{product.price }}</span>
                </div>
                <form class="buyFunction">
                  <div class="form-group row d-flex align-items-end">
                    <label for="quantity" class="col-sm-2 col-form-label text-muted">數量</label>
                    <div class="col-sm-5">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <button class="btn btn-outline-secondary" type="button">-</button>
                        </div>
                        <input type="text" id="quantity" class="form-control text-center" value="1" aria-label="" aria-describedby="basic-addon1">
                        <div class="input-group-append">
                          <button class="btn btn-outline-secondary" type="button">+</button>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-5 text-right">
                      <button type="button" class="addToCart btn btn-secondary">加入購物車</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <hr>
            <div class="row d-flex justify-content-start align-items-center">
              <div class="col-sm-12 productDescription mt-4 mb-4">
                <div class="form-group row text-left">
                  <label for="description" class="col-sm-3 col-form-label text-muted"><strong>商品描述</strong></label>
                  <div class="col-sm-9 ">
                    <p id="description" class="text-sensaicha">{{product.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      product: {}
    }
  },
  created () {
    this.isLoading = true
    console.log(this.$route.params.id)
    const { id } = this.$route.params // 用解構的方式取得 id
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        this.isLoading = false
        console.log(res)
        this.product = res.data.data // 把產品列表資料綁進 products [] 陣列裡頭
      })
  }
}
</script>
