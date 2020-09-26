<template>
    <div class="main-area">
      <loading :active.sync="isLoading"></loading>
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-sm-10 align-self-center">
            <div class="progressBar my-3">
              <ul class="progressBarList">
                <li class="active">確認購物車</li>
                <li>填寫訂購資料</li>
                <li>確認訂單並付款</li>
                <li>付款成功</li>
              </ul>
            </div>
            <div calss="cartContent" v-if="carts.length > 0">
              <div class="cartTable border">
                <div class="row d-flex justify-content-end ">
                  <div class="col-3 col-header d-flex justify-content-end align-items-center">
                    <div class="pl-3 pr-3">
                      <button class="btn btn-outline-danger btn-sm" @click="removeAllCartItem()">
                        <i class="far fa-trash-alt mr-1"></i><span>清空購物車</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-between " v-for="(item) in carts" :key="item.product.id + 1">
                  <div class="col-3 col-content d-flex justify-content-start align-items-center">
                    <div class="pl-3">
                      {{ item.product.title }}
                    </div>
                  </div>
                  <div class="col-xs-4 col-content d-flex justify-content-center align-items-center text-center">
                    <div class="numbox input-group input-group-sm m-0">
                        <div class="input-group-prepend">
                            <button class="btn" type="button" @click="updateQuantity(item.product.id, item.quantity - 1)"
                      :disabled = "item.quantity <= 1">
                              <i class="fas fa-minus"></i>
                            </button>
                        </div>
                        <input type="number" class="numbox-input form-control text-center " :value="item.quantity" @keyup.enter="updateQuantity(item.product.id, $event.target.value)">
                        <div class="input-group-append">
                            <button class="btn" type="button"  @click="updateQuantity(item.product.id, item.quantity + 1)"
                            :disabled = "item.quantity >= 10">
                              <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                  </div>
                  <div class="col-2 col-content d-flex justify-content-center align-items-center">
                      {{ item.quantity }} {{ item.product.unit }}
                  </div>
                  <div class="col-2 col-content d-flex justify-content-center align-items-center">
                      NT{{ item.product.price | currency }}</div>
                  <div class="col-1 col-content d-flex justify-content-center align-items-center">
                      <a href="#" @click.prevent="removeCartItem(item.product.id)"><i class="fas fa-times text-danger"></i></a>
                  </div>
                </div>
              </div>
              <div class="sumTable d-flex justify-content-end ">
                <div class="col-md-8 d-flex justify-content-end align-items-center">
                  <div class="row justify-content-end align-items-start">
                    <div class="pl-3 pr-3 pb-2">
                      <table class="table text-right">
                        <tbody>
                          <tr>
                            <td scoped="col" class="border-top-0">共 {{ quantityTatol }}  件商品</td>
                            <td scoped="col" class="border-top-0">商品金額</td>
                            <td scoped="col" class="border-top-0">NT{{ cartTotal | currency }}</td>
                          </tr>
                          <tr>
                            <td scoped="col" class="border-top-0"></td>
                            <td scoped="col" class="border-top-0">
                              <span class="text-instructions mr-3"><small>消費金額達 999 元免運</small></span><span>運費</span>
                            </td>
                            <td scoped="col" class="border-top-0">
                              <span v-if="cartTotal >= 999">
                              NT{{ 0 | currency }}
                              </span>
                              <span v-else>
                              NT{{ 80 | currency }}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td scoped="col"></td>
                            <td scoped="col">總計</td>
                            <td scoped="col" class="text-danger">
                              <span v-if="cartTotal >= 999">
                              NT{{ cartTotal | currency }}
                              </span>
                              <span v-else>
                                NT{{ cartTotal + 80 | currency }}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fnbar row d-flex justify-content-between align-items-center mt-3">
                <div class="col-xs-4 d-flex justify-content-start align-items-center">
                  <div class="pl-3">
                    <router-link to="/products" class="btn btn-outline-primary">繼續購物</router-link>
                  </div>
                </div>
                <div class="col-xs-4 d-flex justify-content-end align-items-center">
                  <div class="pr-3">
                    <router-link to="/order" class="btn btn-primary" :class="{ disabled: cartTotal <= 0 }">我要買單</router-link>
                  </div>
                </div>
              </div>
            </div>

            <div class="noCartContent row d-flex justify-content-center align-items-center mt-3" v-else>
              <div class="col-12 noContentBox align-self-center">
                <h5 class="mb-5">您的購物車目前是空的喔，趕快去挑選幾位盆栽好朋友吧！</h5>
                <router-link to="/products" class="btn btn-secondary">繼續購物</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      isLoading: false,
      fullPage: true,
      products: {},
      coupon: {},
      coupon_code: '',
      carts: {},
      cartTotal: 0,
      quantityTatol: 0,
      orignalTotal: 0,
      uuid: process.env.VUE_APP_UUID
    }
  },
  created () {
    this.getCart()
  },
  methods: {
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/ec/shopping`
      this.$http.get(url)
        .then((res) => {
          this.carts = res.data.data
          this.calTotal()
          this.isLoading = false
        }).catch((err) => {
          this.isLoading = false
          this.$bus.$emit('message:push',
            `資料讀取失敗，請稍後再試
            ${err}`,
            'danger')
        })
    },
    // 計算商品總件數及總價
    calTotal () {
      let sumTotal = 0
      let sumQuantity = 0
      this.carts.forEach((item) => {
        sumTotal += item.product.price * item.quantity
        sumQuantity += item.quantity
      })
      this.cartTotal = sumTotal
      this.quantityTatol = sumQuantity
    },
    updateQuantity (id, num) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/ec/shopping`
      const data = {
        product: id,
        quantity: num
      }
      this.$http.patch(url, data)
        .then(() => {
          this.isLoading = false
          this.getCart()
        })
    },
    removeCartItem (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/ec/shopping/${id}`
      this.$http.delete(url)
        .then(() => {
          this.$bus.$emit('update-total')
          this.getCart()
          this.isLoading = false
          this.$bus.$emit('message:push',
            '商品已刪除',
            'success')
        })
        .catch((err) => {
          this.isLoading = false
          this.$bus.$emit('message:push',
          `商品刪除失敗
          ${err}`,
          'danger')
        })
    },
    removeAllCartItem () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/ec/shopping/all/product`
      this.$http.delete(url)
        .then(() => {
          this.$bus.$emit('update-total')
          this.getCart()
          this.cartTotal = 0
          this.isLoading = false
          this.$bus.$emit('message:push',
            '商品已全部刪除，將返回產品頁面',
            'success')
          this.$router.push('/products')
        }).catch((err) => {
          this.isLoading = false
          this.$bus.$emit('message:push',
          `商品刪除失敗
          ${err}`,
          'danger')
        })
    }
  }
}
</script>
