<template>
    <div>
        <loading :active.sync="isLoading"></loading>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <p class="h2">優惠券管理</p>
      </div>
      <div class="text-left mt-3 mb-3 pt-2 pb-2">
        <button type="button" class="btn btn-info btn-sm" @click="openModal('new')">新增優惠券</button>
      </div>
      <div id="couponTable">
          <div id=header class="row font-weight-bold py-2 text-center border-bottom">
            <div class="col-2">名稱</div>
            <div class="col">折扣</div>
            <div class="col-3">到期日</div>
            <div class="col">是否啟用</div>
            <div class="col-2">工具列</div>
          </div>
          <div class="row py-2 text-center border-bottom " v-for="(item, key) in coupons" :key="key">
            <div class="col-2 mt-auto mb-auto">{{ item.title }}</div>
            <div class="col mt-auto mb-auto">{{ item.percent }}</div>
            <div class="col-3 text-left mt-auto mb-auto">{{ item.deadline.datetime }}</div>
            <div class="col mt-auto mb-auto">
              <span v-if="item.enabled" class="text-success">啟用</span>
              <span v-else class="text-muted">未啟用</span>
            </div>
            <div class="col-2 mt-auto mb-auto">
              <button type="button" class="btn btn-outline-info btn-sm m-1"
              @click="openModal('edit',item)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm m-1"
              @click="openModal('delete',item)">刪除</button>
            </div>
          </div>
      </div>
      <!-- Modals -->
      <!-- CouponInfo -->
      <div class="modal" id="couponInfo" tabindex="-1" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                <span v-if="status ==='new'">新增優惠券</span>
                <span v-else>編輯優惠券 ─ {{ tempCoupon.title }} </span>
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label for="productName">優惠券名稱</label>
                    <input type="text" id="productName" class="form-control" placeholder="請輸入優惠券名稱"
                      v-model="tempCoupon.title" required>
                  </div>
                  <div class="form-group">
                    <label for="couponCode">優惠碼</label>
                    <input type="text" id="couponCode" class="form-control" placeholder="請輸入優惠碼"
                      v-model="tempCoupon.code" required>
                  </div>
                  <div class="form-group">
                    <label for="dueDate">到期日</label>
                    <input type="date" id="dueDate" class="form-control" placeholder="請輸入到期日"
                      v-model="due_date" required>
                  </div>
                  <div class="form-group">
                    <label for="dueTime">到期時間</label>
                    <input type="time" id="dueTime" step="1" class="form-control" placeholder="請輸入到期時間"
                      v-model="due_time" required>
                  </div>
                  <div class="form-group">
                    <label for="price">折扣百分比</label>
                    <input
                      id="price"
                      v-model="tempCoupon.percent"
                      type="number"
                      class="form-control"
                      placeholder="請輸入折扣百分比" required
                    >
                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <input id="enabled" v-model="tempCoupon.enabled" class="form-check-input" type="checkbox"> <!-- 原本有把 true 、 false 的值替換成 0、1，但看到 data 似乎還是用 true 、 false 判斷? 就拿掉了 -->
                      <label class="form-check-label" for="enabled">是否啟用</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-info" @click="updateCoupon">{{ status === 'new' ? '新增' : '儲存' }}</button>
            </div>
          </div>
        </div>
      </div>
      <!-- End CouponInfo -->
      <!-- DelCoupon -->
      <div class="modal" id="delCoupon" tabindex="-1" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">刪除優惠券</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>執行後，<strong>{{ tempCoupon.title }}</strong>將被刪除，此動作將無法恢復，確認要執行刪除？</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-danger" @click="delCoupon">確認刪除</button>
            </div>
          </div>
        </div>
      </div>
      <!-- End DelCoupon -->
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Coupons',
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        enabled: false,
        percent: 100,
        deadline_at: 0,
        code: ''
      },
      due_date: '',
      due_time: '',
      status: '',
      isLoading: false,
      uuid: process.env.VUE_APP_UUID
    }
  },
  created () {
    this.getCoupons()
  },
  methods: {
    openModal (status, item) {
      this.status = status
      switch (status) {
        case 'new':
          this.tempCoupon = {
            enabled: false // 發現不能直接把 tempCoupon{} 全部清空，這樣如果一開始沒有勾選啟用， enabled 會 undefined ，導致即使沒勾選啟用，新增後也會被自動啟用
          }
          this.due_date = ''
          this.due_time = ''
          $('#couponInfo').modal('show')
          break
        // 由於 const 與 let 宣告環境較特別，故需要在 case 外層宣告一個 {} 確保作用域
        case 'edit': {
          this.tempCoupon = { ...item }
          // 使用 split 切割相關時間戳
          const deadlineAt = this.tempCoupon.deadline.datetime.split(' ');
          [this.due_date, this.due_time] = deadlineAt // 日期
          $('#couponInfo').modal('show')
          break
        }
        case 'delete':
          this.tempCoupon = { ...item }
          $('#delCoupon').modal('show')
          break
        default:
          break
      }
    },
    getCoupons () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/ec/coupons`
      this.$http.get(url).then((response) => {
        this.coupons = response.data.data
        this.isLoading = false
      })
    },
    updateCoupon () {
      this.isLoading = true
      let api = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/ec/coupon`
      let httpMethod = ''
      let status = '新增成功'
      if (this.status === 'new') {
        httpMethod = 'post'
      } else {
        api = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/ec/coupon/${this.tempCoupon.id}`
        status = '更新成功'
        httpMethod = 'patch'
      }
      // 針對日期做組合重新寫入到物件中
      // 日期格式 Y-m-d H:i:s，例如：「2020-06-16 09:31:18」
      this.tempCoupon.deadline_at = `${this.due_date} ${this.due_time}`
      this.$http[httpMethod](api, this.tempCoupon).then(() => {
        $('#couponInfo').modal('hide')
        this.$bus.$emit('message:push',
          status,
          'success')
        this.getCoupons()
      }).catch(() => {
        this.$bus.$emit('message:push',
          '發生錯誤，請重新操作',
          'danger')
        this.isLoading = false
      })
    },
    delCoupon () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/ec/coupon/${this.tempCoupon.id}`
      this.$http.delete(api).then(() => {
        $('#delCoupon').modal('hide')
        this.$bus.$emit('message:push',
          '刪除成功',
          'success')
        this.getCoupons()
        this.isLoading = false
      }).catch(() => {
        this.$bus.$emit('message:push',
          '發生錯誤，請重新操作',
          'danger')
        this.isLoading = false
      })
    }
  }
}
</script>
