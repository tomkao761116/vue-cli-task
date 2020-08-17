<template>
<div>
  <loading :active.sync="isLoading"></loading>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <p class="h2">圖片列表</p>
  </div>
  <div id="productTable">
    <div id=header class="row font-weight-bold py-2 text-center border-bottom">
      <div class="col">圖片縮圖</div>
      <div class="col-2">工具列</div>
    </div>
    <div class="row py-2 text-center border-bottom " v-for="(item, key) in storages" :key="key">
      <div class="col mt-auto mb-auto">
        <img
              :src="item.path"
              width="100px"
              class="img-fluid"
            >
      </div>
      <div class="col-2 mt-auto mb-auto">
        <button type="button" class="btn btn-outline-danger btn-sm m-1"
        @click.prevent="openModal(item)">刪除</button>
      </div>
    </div>
    <pagination :pages="pagination" class="mt-4" @emit-pages="getData"></pagination>
  </div>
  <!-- Modals -->
  <!-- DelImage -->
    <div class="modal" id="delImage" tabindex="-1" role="dialog">
      <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title">刪除圖片</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
              <p>執行後，此動作將無法恢復，確認要執行刪除？</p>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-danger" @click="delData">確認刪除</button>
          </div>
          </div>
      </div>
    </div>
    <!-- End DelImage -->
</div>
</template>

<script>
import $ from 'jquery'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Images',
  components: {
    Pagination
  },
  data () {
    return {
      storages: {},
      tempData: {},
      pagination: {},
      isLoading: false,
      uuid: process.env.VUE_APP_UUID
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/storage?page=${page}`

      this.$http.get(url).then((response) => {
        this.storages = response.data.data
        this.pagination = response.data.meta.pagination

        this.isLoading = false
      })
    },
    openModal (item) {
      $('#delImage').modal('show')
      this.tempData = { ...item } // 把圖片資料帶入到 tempData
    },
    delData () {
      this.isLoading = true

      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/storage/${this.tempData.id}`

      this.$http.delete(url).then(() => {
        $('#delImage').modal('hide')

        this.$bus.$emit('message:push',
          '資料刪除成功',
          'success')
        this.isLoading = false

        this.getData()
      })
    }
  }
}
</script>
