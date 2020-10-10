<template>
  <div class="main-area container">
    <loading :active.sync="isLoading"></loading>
    <div class="row justify-content-center align-items-center">
      <div class="col-sm-10 align-self-center">
        <div class="progressBar my-3">
          <ul class="progressBarList">
            <li class="progressEnd">確認購物車</li>
            <li class="progressEnd">填寫訂購資料</li>
            <li class="progressEnd">確認訂單並付款</li>
            <li class="progressEnd">付款成功</li>
          </ul>
        </div>
      </div>
    </div>
    <div  class="row d-flex justify-content-center">
      <div class="col-12 align-self-center">
            <h5 class="mb-5">訂購成功！感謝您的購買~</h5>
            <div class="mb-4">
              <a href="#" class="btn btn-outline-primary" @click.prevent="openModal(orderId)">查看訂單明細</a>
            </div>
            <router-link to="/products" class="btn btn-secondary">返回商品頁面</router-link>
      </div>
    </div>
    <!-- Modals -->
    <!-- OrderInfo -->
    <div class="modal" id="orderInfo" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <span>訂單詳情</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-left">
            <div class="row">
              <div class="col-sm-12">
                <div class="cartTable border rounded">
                  <div class="row d-flex justify-content-between " v-for="(item, key) in order.products"
                      :key="key">
                      <div class="col-content col-4 d-flex justify-content-start align-items-center">
                        <div class="pl-3">
                          {{ item.product.title }}
                        </div>
                      </div>
                      <div class="col-content col-4 d-flex justify-content-center align-items-center">
                          {{ item.quantity }} {{ item.product.unit }}
                      </div>
                      <div class="col-content col-4 d-flex justify-content-end align-items-center">
                        <div class="pr-3">
                          NT{{ item.product.price | currency }}
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="purchaseInfo row">
              <div class="col-lg-6">
                <div class="mb-3">
                    <p class="font-weight-bold">訂購資訊</p>
                </div>
                <form>
                    <!-- 訂購人姓名 -->
                    <div class="form-group row">
                      <label for="username" class="col-sm-3 col-form-label font-weight-bold">訂購人</label>
                      <div class="col-sm-9">
                        <input type="text" readonly class="form-control-plaintext" id="username"  :value="order.user.name">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="email" class="col-sm-3 col-form-label font-weight-bold">訂購信箱</label>
                      <div class="col-sm-9">
                        <input type="mail" readonly class="form-control-plaintext" id="email"  :value="order.user.email">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="phone" class="col-sm-3 col-form-label font-weight-bold">訂購電話</label>
                      <div class="col-sm-9">
                        <input type="phone" readonly class="form-control-plaintext" id="phone"  :value="order.user.tel">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="address" class="col-sm-3 col-form-label font-weight-bold">收件地址</label>
                      <div class="col-sm-9">
                        <input type="text" readonly class="form-control-plaintext" id="address"  :value="order.user.address">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="payment" class="col-sm-3 col-form-label font-weight-bold">付款方式</label>
                      <div class="col-sm-9">
                        <input type="text" readonly class="form-control-plaintext" id="payment"  :value="order.payment">
                      </div>
                    </div>
                </form>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                    <p class="font-weight-bold m-0">總金額</p>
                </div>
                <div class="sumTable" >
                  <div class="row d-flex justify-content-end">
                      <div class="col-12 d-flex justify-content-end align-items-start pb-2 text-sensaicha">
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
                              <td scope="col" class="border-top-0"></td>
                              <td scope="col" class="border-top-0">優惠券</td>
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
                              <td scope="col" class="border-top-0"></td>
                              <td scope="col" class="border-top-0">運費</td>
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
                              <td scope="col"></td>
                              <td scope="col">總計</td>
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
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
          </div>
        </div>
      </div>
    </div>
    <!-- End OderInfo -->
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'PurchaseSuccessful',
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
    // 開啟  Modal
    openModal (item) {
      $('#orderInfo').modal('show')
      this.order = {
        user: {}
      }
      this.getOrder(item.id)
    }
  }
}
</script>
