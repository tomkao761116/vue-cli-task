<template>
    <div>
      <loading :active.sync="isLoading"></loading>
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-sm-10 align-self-center">
            <div id="progressBar" class="my-3">
              <ul class="progressbar">
                <li class="active">確認購物車</li>
                <li class="active">填寫訂購資料</li>
                <li>確認訂單並結帳</li>
              </ul>
            </div>
            <validation-observer v-slot = "{invalid}" >
              <form @submit.prevent="createOrder" class="text-left">
                <div class="row">
                  <!-- 填寫訂購資訊 -->
                  <div id="purchaseInfo" class="col-md-6 align-self-start">
                    <h6 class="text-left">訂購資訊</h6>
                    <hr>
                      <!-- 訂購人姓名 -->
                      <div class="form-group">
                        <validation-provider v-slot="{errors, classes}" rules="required">
                          <label for="username">訂購人姓名</label>
                          <input type="text" id="username" class="form-control" v-model="form.name" :class="classes">
                          <span v-if="errors[0]" class="text-danger">{{errors[0]}}</span>
                        </validation-provider>
                      </div>
                      <!-- 訂購人信箱 -->
                      <div class="form-group">
                        <validation-provider v-slot="{errors, classes}" rules="required|email">
                          <label for="email">訂購人信箱</label>
                          <input type="email" id="email" class="form-control" v-model="form.email" :class="classes">
                          <span v-if="errors[0]" class="text-danger">{{errors[0]}}</span>
                        </validation-provider>
                      </div>
                      <!-- 訂購人電話 -->
                      <div class="form-group">
                        <validation-provider  v-slot="{ errors, classes }" rules="required|min:8|max:10">
                          <label for="phone">訂購人電話</label>
                          <input id="phone" v-model="form.tel" type="tel" class="form-control" :class="classes">
                          <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                        </validation-provider>
                      </div>
                      <!-- 訂購地址 -->
                      <div class="form-group">
                        <validation-provider v-slot="{ errors, classes }" rules="required">
                          <label for="address">地址</label>
                          <input id="address" v-model="form.address" type="text" class="form-control" :class="classes">
                          <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                        </validation-provider>
                      </div>
                      <!-- 付款方式 -->
                      <div class="form-group">
                        <label for="payment">付款方式</label>
                        <select id="payment" v-model="form.payment" class="form-control" required>
                          <option value="" selected disabled>
                            請選擇付款方式
                          </option>
                          <option value="WebATM">
                            WebATM
                          </option>
                          <option value="ATM">
                            ATM轉帳付款
                          </option>
                          <option value="CVS">
                            超商取貨付款
                          </option>
                          <option value="Barcode">
                            Barcode
                          </option>
                          <option value="Credit">
                            信用卡
                          </option>
                          <option value="ApplePay">
                            ApplePay
                          </option>
                          <option value="GooglePay">
                            GooglePay
                          </option>
                        </select>
                      </div>
                      <!-- 備註 -->
                      <div class="form-group">
                        <label for="message">備註</label>
                        <textarea id="message" v-model="form.message" class="form-control" cols="30" rows="3">
                      </textarea>
                      </div>
                  </div>
                  <div id="orderInfo" class="col-sm-6 align-self-start">
                    <h6 class="text-left">您的訂單</h6>
                    <hr>
                    <div id=header class="row d-flex justify-content-between align-items-center pl-3 pr-3 font-weight-bold">
                      <div class="col-9 d-flex justify-content-center align-items-center border" style="height:40px">品項</div>
                      <div class="col-3 d-flex justify-content-center align-items-center border-top border-bottom border-right " style="height:40px">小計</div>
                    </div>
                    <div class="row d-flex justify-content-between pl-3 pr-3" v-for="(item) in carts" :key="item.product.id + 1">
                        <div class="col-9 d-flex justify-content-start align-items-center border-left border-right border-bottom" style="height:50px">
                          {{ item.product.title }} x {{ item.quantity }}
                        </div>
                        <div class="col-3 d-flex justify-content-start align-items-center border-right border-bottom" style="height:50px">
                            NT. {{ item.product.price | currency }}
                        </div>
                    </div>
                    <div id="sumTable" class="col-12 d-flex justify-content-center align-items-center">
                        <table class="table text-right">
                          <tbody>
                            <tr>
                                <td scope="col" class="border-top-0">共 {{ quantityTatol }}  件商品</td>
                                <td scope="col" class="border-top-0">商品金額</td>
                                <td scope="col" class="border-top-0">NT. {{ orignalTotal | currency }}</td>
                            </tr>
                            <tr>
                                <td scope="col" class="border-top-0"></td>
                                <td scope="col" class="border-top-0">
                                    <input type="text" v-model="coupon_code" class="form-control form-control-sm" placeholder="請輸入優惠碼" aria-label="coupon">
                                </td>
                                <td scope="col" class="border-top-0">
                                  <button class="btn btn-outline-primary btn-sm" type="button" @click="addCoupon">套用</button>
                                </td>
                            </tr>
                            <tr class="text-danger">
                                <td scope="col" class="border-top-0"></td>
                                <td scope="col" class="border-top-0">
                                    優惠券
                                </td>
                                <td scope="col" class="border-top-0">
                                    <span v-if="coupon.enabled">
                                    {{ coupon.title }}
                                    </span>
                                    <span v-else>
                                    未使用
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td scope="col" class="border-top-0"></td>
                                <td scope="col" class="border-top-0">運費</td>
                                <td scope="col" class="border-top-0">
                                    <span v-if="cartTotal >= 999">
                                    NT.  {{ 0 | currency }}
                                    </span>
                                    <span v-else>
                                    NT. {{ 80 | currency }}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td scope="col"></td>
                                <td scope="col">總計</td>
                                <td scope="col" class="text-danger">
                                  <span v-if="cartTotal >= 999">
                                    NT. {{ cartTotal | currency }}
                                  </span>
                                  <span v-else>
                                    NT. {{ cartTotal + 80 | currency }}
                                  </span>
                                </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="fnbar row d-flex justify-content-between align-items-center mt-3">
                        <div class="col-xs-4 d-flex justify-content-start align-items-center pl-3">
                          <router-link to="/cart" class="btn btn-outline-primary">回購物車</router-link>
                        </div>
                        <div class="col-xs-4 d-flex justify-content-end align-items-center pr-3" >
                          <button type="submit" class="btn btn-primary" :disabled="invalid">
                            確認訂購
                          </button>
                        </div>
                      </div>
                  </div>
                </div>
              </form>
            </validation-observer>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
      isLoading: false,
      fullPage: true,
      form: {
        email: '',
        name: '',
        tel: '',
        address: '',
        payment: 'WebATM',
        message: ''
      },
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
          console.log(this.cartTotal)
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
      if (this.coupon.enabled === true) {
        this.cartTotal = sumTotal * (this.coupon.percent / 100)
        console.log('更新後的總價' + this.cartTotal)
      } else {
        this.cartTotal = sumTotal
        console.log('總價' + this.cartTotal)
      }
      this.orignalTotal = sumTotal
      this.quantityTatol = sumQuantity
    },
    // 新增 coupon (實際是搜尋 coupon)
    addCoupon () {
      this.isLoading = true

      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/ec/coupon/search`
      // 輸入 coupon 之前必須先戳一下 api/{{ uuid }}/coupon/search API 確定該 coupon 是存在的
      this.$http.post(url, { code: this.coupon_code })
        .then((response) => {
          // 若 coupon 存在就回寫回去到 this.coupon
          // 該資料會是一個物件格式
          this.coupon = response.data.data
          console.log(this.coupon.title)
          console.log(this.coupon.enabled)
          this.calTotal() // 更新價格
          this.$bus.$emit('message:push',
            '優惠碼已套用',
            'success')
          this.isLoading = false
        }).catch((error) => {
          const errorData = error.response.data.errors

          if (errorData) {
            errorData.code.forEach((err) => {
              this.$bus.$emit('message:push',
                `優惠碼套用失敗
              ${err}`,
                'danger')
            })
            this.isLoading = false
          } else {
            const { message } = error.response.data

            this.$bus.$emit('message:push',
              `優惠碼套用失敗
              ${message}`,
              'danger')

            this.isLoading = false
          }
        })
    },
    createOrder () {
      this.isLoading = true

      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/ec/orders`

      const order = { ...this.form }

      // 如果有優惠卷就加入，請注意該 coupon 必須先執行過 this.addCoupon()
      // 主要會使用 enabled 屬性判斷該 coupon 是否可以使用
      // 如果沒有執行 this.addCoupon() 那麼 enabled 就會是 undefined，因此還是不會執行
      if (this.coupon.enabled) {
        order.coupon = this.coupon.code
      }

      this.$http.post(url, order)
        .then((res) => {
          if (res.data.data.id) {
            this.$bus.$emit('message:push',
              '訂單建立成功',
              'success')
            this.$router.push(`/checkout/${res.data.data.id}`)
          }
          this.isLoading = false
        }).catch((err) => {
          const errorData = err.response.data.errors

          errorData.forEach((err) => {
            this.$bus.$emit('message:push',
              `建立訂單發生錯誤
            ${err}`,
              'danger')
          })

          this.isLoading = false
        })
    }
  }
}
</script>
