<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <p class="h2">訂單管理</p>
    </div>
    <div id="orderTable">
        <div id=header class="row font-weight-bold py-2 text-center border-bottom">
          <div class="col-3">訂單編號</div>
          <div class="col-2">下單時間</div>
          <div class="col-2">付款方式</div>
          <div class="col-2">應付金額</div>
          <div class="col-2">是否付款</div>
          <div class="col-1">工具列</div>
        </div>
        <div class="row py-2 text-center border-bottom " v-for="(item, key) in orders" :key="key" :class="{'text-secondary': !item.is_paid}">
          <div class="col-3 text-break">
            {{item.id}}
          </div>
          <div class="col-2 mt-auto mb-auto">{{ item.created.datetime }}</div>
          <div class="col-2 mt-auto mb-auto">{{ item.payment }}</div>
          <div class="col-2 mt-auto mb-auto">NT.{{ item.amount + 80 }}</div>
          <div class="col-2 mt-auto mb-auto">
              <div class="custom-control custom-switch">
                <input
                  :id="item.id"
                  v-model="item.paid"
                  type="checkbox"
                  class="custom-control-input"
                  @change="setOrderPaid(item)"
                >
                <label
                  class="custom-control-label"
                  :for="item.id"
                >
                  <strong
                    v-if="item.paid"
                    class="text-success"
                  >已付款</strong>
                  <span
                    v-else
                    class="text-muted"
                  >尚未付款</span>
                </label>
              </div>
          </div>
          <div class="col-1 mt-auto mb-auto">
              <button type="button" class="btn btn-outline-info btn-sm m-1"
              @click="openModal(item)">詳情</button>
          </div>
        </div>
        <Pagination
      :pages="pagination" class="mt-4"
      @emitPages="getOrders"
    />
    </div>
    <!-- Modals -->
    <!-- CouponInfo -->
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
                <div id="cartTable" class="border rounded">
                  <div class="row d-flex justify-content-between " v-for="(item, key) in order.products"
                      :key="key">
                      <div class="col-4 d-flex justify-content-center align-items-center" style="height: 80px;">
                          {{ item.product.title }}</div>
                      <div class="col-4 d-flex justify-content-center align-items-center" style="height: 80px;">
                          {{ item.quantity }} {{ item.product.unit }}
                      </div>
                      <div class="col-4 d-flex justify-content-center align-items-center" style="height: 80px;">
                          NT. {{ item.product.price }}</div>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div id="purchaseInfo" class="row">
              <div class="col-md-6">
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
              <div class="col-md-6">
                <div class="mb-3">
                    <p class="font-weight-bold m-0">總金額</p>
                </div>
                <div id="sumTable" >
                  <div class="row d-flex justify-content-end">
                      <div class="col-12 d-flex justify-content-end align-items-start pb-2 text-sensaicha">
                          <table class="table text-right">
                              <tbody>
                                  <tr>
                                      <td scope="col" class="border-top-0">共 {{ totalQuantity }}  件商品</td>
                                      <td scope="col" class="border-top-0">商品金額</td>
                                      <td scope="col" class="border-top-0">NT. {{ order.amount }}</td>
                                  </tr>
                                  <tr class="text-danger">
                                      <td scope="col" class="border-top-0"></td>
                                      <td scope="col" class="border-top-0">優惠券</td>
                                      <td scope="col" class="border-top-0">未使用</td>
                                  </tr>
                                  <tr>
                                      <td scope="col" class="border-top-0"></td>
                                      <td scope="col" class="border-top-0">運費</td>
                                      <td scope="col" class="border-top-0">NT. 80</td>
                                  </tr>
                                  <tr>
                                      <td scope="col"></td>
                                      <td scope="col">總計</td>
                                      <td scope="col" class="text-danger">NT.{{ order.amount + 80 }}</td>
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
    <!-- End CouponInfo -->
    <!-- DelCoupon -->
    <!-- <div class="modal" id="delOrder" tabindex="-1" role="dialog">
      <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title">刪除優惠券</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
              <p>執行後，<strong>{{ tempOrder.item }}</strong>將被刪除，此動作將無法恢復，確認要執行刪除？</p>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-danger" @click="delOrder">確認刪除</button>
          </div>
          </div>
      </div>
    </div> -->
    <!-- End DelCoupon -->
  </div>
</template>

<script>
import $ from 'jquery'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Orders',
  components: {
    Pagination
  },
  data () {
    return {
      orders: [],
      order: {
        user: {}
      },
      totalQuantity: 0,
      isNew: false,
      pagination: {},
      isLoading: false,
      uuid: process.env.VUE_APP_UUID
    }
  },
  created () {
    this.getOrders()
  },
  methods: {
    getOrders (pages = 1) {
      this.isLoading = true

      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/ec/orders?page=${pages}`

      this.$http.get(url).then((response) => {
        this.orders = response.data.data
        this.pagination = response.data.meta.pagination
        this.isLoading = false
      })
    },
    setOrderPaid (item) {
      let url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/ec/orders/${item.id}/paid`

      if (!item.paid) {
        url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/admin/ec/orders/${item.id}/unpaid`
      }

      this.$http.patch(url, item.id).then(() => {
        this.$bus.$emit('message:push',
          '付款狀態已修改完成',
          'success')

        this.getOrders()
      })
    },
    // 取得單一訂單詳情
    getOrderInfo (id) {
      this.isLoading = true
      this.orderId = id

      const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/ec/orders/${id}`

      this.$http.get(url).then((response) => {
        this.order = response.data.data
        console.log(this.order)
        console.log(this.order.products)
        this.order.products.forEach(item => {
          console.log(item.quantity)
          this.totalQuantity += item.quantity
          console.log(this.totalQuantity)
        })
        this.isLoading = false
      })
    },
    // 開啟  Modal
    openModal (item) {
      $('#orderInfo').modal('show')
      this.totalQuantity = 0
      this.order = {
        user: {}
      }
      this.getOrderInfo(item.id)
    }
  }
}
</script>
