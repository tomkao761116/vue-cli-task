<template>
  <div class="main-area container">
    <loading :active.sync="isLoading"></loading>
    <div class="row justify-content-center align-items-center">
      <div class="col-sm-10 align-self-center">
        <ul class="progress-indicator my-5">
          <li class="completed">
              <span class="bubble"></span>
              <i class="fa fa-check-circle mr-1"></i>
              <small>確認購物車</small>
          </li>
          <li class="completed">
              <span class="bubble"></span>
              <i class="fa fa-check-circle mr-1"></i>
              <small>填寫訂購資料</small>
          </li>
          <li class="active">
              <span class="bubble"></span>
              <small>確認付款</small>
          </li>
          <li>
              <span class="bubble"></span>
              <small>訂單建立完成</small>
          </li>
        </ul>
        <div class="cartContent text-center">
          <div class="cartTable col-md-12 border">
            <div class="row d-flex justify-content-between " v-for="(item, key) in order.products"
            :key="key">
              <div class="col-content col-6 d-flex justify-content-start align-items-center" >
                <div class="pl-3">
                  {{ item.product.title }}
                </div>
              </div>
              <div class="col-content col-3 d-flex justify-content-center align-items-center">
                {{ item.quantity }} {{ item.product.unit }}
              </div>
              <div class="col-content col-3 d-flex justify-content-end align-items-center">
                <div class="pr-3">
                  NT{{ item.product.price | currency }}
                </div>
              </div>
            </div>
          </div>
          <div class="sumTable col-md-12">
            <div class="row d-flex justify-content-end">
              <div class="col-md-8 d-flex justify-content-end align-items-start pt-3 pb-2">
                <table class="table text-right text-primary">
                  <tbody>
                    <tr>
                      <td scope="col" class="border-top-0">
                        共 {{ quantityTatol }} 件商品
                      </td>
                      <td scope="col" class="border-top-0">商品金額</td>
                      <td scope="col" class="border-top-0">
                        NT{{ order.amount | currency }}
                      </td>
                    </tr>
                    <tr class="text-danger">
                      <td colspan="2" scope="col" class="border-top-0">優惠券</td>
                      <td scope="col" class="border-top-0">
                        <span v-if="isEnabled">
                          {{ order.coupon.title }}
                        </span>
                        <span v-else>
                          未使用
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" scope="col" class="border-top-0">運費</td>
                      <td scope="col" class="border-top-0">
                        <span v-if="order.amount >= 999">
                          NT{{ 0 | currency }}
                          </span>
                          <span v-else>
                          NT{{ 80 | currency }}
                          </span>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" scope="col">總計</td>
                      <td scope="col" class="text-danger">
                        <span v-if="order.amount >= 999">
                          NT{{ order.amount | currency }}
                        </span>
                        <span v-else>
                          NT{{ order.amount + 80 | currency }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="purchaseInfo col-md-12 mt-5">
            <div class="row d-flex justify-content-start">
              <div class="col-md-12 justify-content-start align-items-center pl-0 pr-0">
                <ul class="list-group">
                  <li class="list-group-item text-left">
                    <h5 class="py-3">訂購資訊</h5>
                    <table class="table text-primary">
                      <tbody>
                        <tr>
                          <th scope="row" class="px-0" width="200">
                            訂購人姓名
                          </th>
                          <td>
                            {{ order.user.name }}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" class="px-0" width="200">
                            訂購人信箱
                          </th>
                          <td>
                            {{ order.user.email }}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" class="px-0" width="200">
                            訂購人電話
                          </th>
                          <td>
                            {{ order.user.tel }}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" class="px-0" width="200">
                            收件地址
                          </th>
                          <td>
                            {{ order.user.address }}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" class="px-0" width="200">
                            付款方式
                          </th>
                          <td>
                            {{ order.payment }}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" class="px-0" width="200">
                            備註
                          </th>
                          <td>
                            <span v-if="order.message == null ">
                              無
                            </span>
                            <span v-else>
                              {{ order.message }}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" class="px-0" width="200">
                            付款狀態
                          </th>
                          <td>
                            <span class="text-danger" v-if="!order.paid">尚未付款</span>
                          <strong
                            v-else
                            class="text-success"
                          >付款完成</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ul>
              </div>
            </div>
            <div class="fnbar row d-flex justify-content-center align-items-center mt-3" v-if="order.paid === false">
              <div class="col-xs-4 d-flex justify-content-end align-items-center pr-3" >
                <button class="btn btn-primary" @click.prevent="payOrder">
                  確認付款
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckOut',
  data () {
    return {
      isLoading: false,
      fullPage: true,
      order: {
        user: {}
      },
      orderId: '',
      isEnabled: false,
      quantityTatol: 0,
      uuid: process.env.VUE_APP_UUID
    }
  },
  created () {
    this.orderId = this.$route.params.orderId

    this.getOrder()
  },
  methods: {
    getOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/ec/orders/${this.orderId}`
      this.$http.get(url)
        .then((res) => {
          this.order = res.data.data

          if (this.order.coupon === null) {
            this.isEnabled = false
          } else {
            this.isEnabled = true
          }
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
      let sumQuantity = 0
      this.order.products.forEach((item) => {
        sumQuantity += item.quantity
      })
      this.quantityTatol = sumQuantity
    },
    payOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/ec/orders/${this.orderId}/paying`

      this.$http.post(url)
        .then((res) => {
          if (res.data.data.paid) {
            this.$bus.$emit('update-total')
            this.getOrder()
            this.$bus.$emit('message:push',
              '付款成功',
              'success')
            this.$router.push(`/purchaseSuccessful/${this.orderId}`)
          }
          this.isProcessing = false
        }).catch((err) => {
          this.$bus.$emit('message:push',
            `付款失敗，請稍後再試
            ${err}`,
            'danger')
          this.isProcessing = false
        })
    }
  }
}
</script>
