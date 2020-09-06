<template>
    <div>
      <loading :active.sync="isLoading"></loading>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <p class="h2">商品管理</p>
      </div>
      <div class="text-left mt-3 mb-3 pt-2 pb-2">
        <button type="button" class="btn btn-info btn-sm" @click="openModal('new')">新增商品</button>
      </div>
      <div id="productTable">
          <div id=header class="row font-weight-bold py-2 text-center border-bottom">
            <div class="col-2">商品名稱</div>
            <div class="col">商品分類</div>
            <div class="col-3">商品描述</div>
            <div class="col">原價</div>
            <div class="col">售價</div>
            <div class="col">是否啟用</div>
            <div class="col-2">工具列</div>
          </div>
          <div :id="item.id" class="row py-2 text-center border-bottom " v-for="(item) in products" :key="item.id">
            <div class="col-2 mt-auto mb-auto">{{ item.title }}</div>
            <div class="col mt-auto mb-auto">{{ item.category }}</div>
            <div class="col-3 text-left mt-auto mb-auto">
              <p v-html="item.content"></p>
            </div>
            <div class="col mt-auto mb-auto">{{ item.origin_price }}</div>
            <div class="col mt-auto mb-auto">{{ item.price }}</div>
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
          <pagination :pages="pagination" class="mt-4" @emit-pages="getProducts"></pagination>
      </div>
      <!-- Modals -->
      <!-- ProductInfo -->
      <div class="modal" id="productInfo" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                <span v-if="isNew">新增產品</span>
                <span v-else>編輯產品 ─ {{ tempProduct.title }} </span>
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left">
              <div class="row">
                <div class="col-sm-6 text-">
                  <div class="form-group">
                    <label for="productName">商品名稱</label>
                    <input type="text" id="productName" class="form-control" placeholder="請輸入商品名稱"
                      v-model="tempProduct.title" required>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-sm-8">
                      <label for="category">分類</label>
                      <input id="category" type="text" class="form-control" v-model="tempProduct.category"
                        placeholder="請輸入分類" required>
                    </div>
                    <div class="form-group col-sm-4">
                      <label for="productUnit">商品單位</label>
                      <input type="text" d="productUnit" class="form-control" i placeholder="請輸入商品單位"
                        v-model="tempProduct.unit" required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-sm-6">
                      <label for="productOrignalPrice">商品原價</label>
                      <input type="number" id="productOrignalPrice" class="form-control" placeholder="請輸入商品原價"
                        v-model="tempProduct.origin_price" required>
                    </div>
                    <div class="form-group col-sm-6">
                      <label for="productPrice">商品售價</label>
                      <input type="number" id="productPrice" class="form-control" placeholder="請輸入商品售價"
                        v-model="tempProduct.price">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="productDescription">商品描述</label>
                    <textarea id="productDescription" class="form-control" placeholder="請輸入商品描述"
                      v-model="tempProduct.description" required></textarea>
                  </div>
                  <div class="form-group">
                    <label for="productContent">商品內容</label>
                    <vue-editor
                      id="productContent"
                      v-model="tempProduct.content"
                    />
                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <input id="enabled" v-model="tempProduct.enabled" class="form-check-input" type="checkbox">
                      <label class="form-check-label" for="enabled">是否啟用</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                    <div v-for="i in 5" :key="i + 'img'" class="form-group">
                        <label :for="'img' + i">輸入圖片網址</label>
                        <input :id="'img' + i" v-model="tempProduct.imageUrl[i - 1]" type="text" class="form-control"
                        placeholder="請輸入圖片連結">
                    </div>
                    <div class="form-group">
                        <label for="customFile">
                        或 上傳圖片
                        <i v-if="status.fileUploading" class="fas fa-spinner fa-spin"></i>
                        </label>
                        <input id="customFile" ref="file" type="file" class="form-control" @change="uploadFile">
                    </div>
                    <img class="img-fluid" :src="tempProduct.imageUrl[0]" alt="商品圖片">
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-info" @click="updateProduct">儲存</button>
            </div>
          </div>
        </div>
      </div>
      <!-- End ProductInfo -->
      <!-- Delete Product -->
      <div class="modal" id="delProduct" tabindex="-1" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">刪除商品</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>執行後，<strong>{{ tempProduct.title }}</strong>將被刪除，此動作將無法恢復，確認要執行刪除？</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-danger" @click="delProduct">確認刪除</button>
            </div>
          </div>
        </div>
      </div>
      <!-- End Delete Product -->
    </div>
</template>

<script>
import $ from 'jquery'
import { VueEditor } from 'vue2-editor/dist/vue2-editor.core'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Products',
  components: {
    VueEditor,
    Pagination
  },
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {
        imageUrl: []
      },
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false
      },
      uuid: process.env.VUE_APP_UUID
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    // 取得商品清單
    getProducts (page = 1) {
      this.isLoading = true
      const apiUrl = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/ec/products?page=${page}`
      this.$http.get(apiUrl) // http 前面加 $ 字號，是為了跟我們自己訂的方法產生衝突
        .then((res) => {
          console.log(res)
          this.products = res.data.data // 把產品列表資料綁進 products [] 陣列裡頭
          this.pagination = res.data.meta.pagination
          this.isLoading = false
        })
    },
    // 取得單一商品資訊
    getProduct (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/ec/product/${id}`
      this.$http.get(api).then((res) => {
        this.tempProduct = res.data.data
        // eslint-disable-next-line no-undef
        $('#productInfo').modal('show')
        this.isLoading = false
      }).catch((err) => {
        console.log(err)
      })
    },
    // 開啟  Modal
    openModal (isNew, item) {
      switch (isNew) {
        case 'new':
          this.tempProduct = {
            imageUrl: []
          }
          this.isNew = true
          // eslint-disable-next-line no-undef
          $('#productInfo').modal('show')
          break
        case 'edit':
          this.getProduct(item.id)
          this.isNew = false
          break
        case 'delete':
          this.tempProduct = { ...item }
          // eslint-disable-next-line no-undef
          $('#delProduct').modal('show')
          break
        default:
          break
      }
    },
    // 新增或更新單一商品資料
    updateProduct () {
      // 新增商品
      let api = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/ec/product`
      let callMethod = 'post'
      // 更新商品
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/ec/product/${this.tempProduct.id}`
        callMethod = 'patch'
      }
      // call api 處理資料，並關閉 modal
      this.$http[callMethod](api, this.tempProduct).then(() => {
        // eslint-disable-next-line no-undef
        if (callMethod === 'post') {
          // eslint-disable-next-line no-undef
          $('#productInfo').modal('hide')
          this.$bus.$emit('message:push',
            '商品新增成功 ',
            'success')
        } else if (callMethod === 'patch') {
          // eslint-disable-next-line no-undef
          $('#productInfo').modal('hide')
          this.$bus.$emit('message:push',
            '商品修改成功 ',
            'success')
        }
        this.isLoading = false
        this.getProducts()
      }).catch((err) => {
        this.isLoading = false
        const errorData = err.response.data
        // eslint-disable-next-line no-undef
        $('#productModal').modal('hide')
        this.$bus.$emit('message:push',
          `商品新增失敗 ${errorData}`,
          'danger')
      })
    },
    // 上傳檔案
    uploadFile () {
      const uploadedFile = this.$refs.file.files[0]
      const formData = new FormData()
      formData.append('file', uploadedFile)
      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/storage`
      this.status.fileUploading = true
      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        this.status.fileUploading = false
        if (res.status === 200) {
          this.tempProduct.imageUrl.push(res.data.data.path)
        }
      }).catch(() => {
        this.$bus.$emit('message:push',
          '檔案上傳失敗，請檢查是不是檔案大小超過 2MB',
          'danger')
        this.status.fileUploading = false
      })
    },
    // 刪除商品
    delProduct () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/ec/product/${this.tempProduct.id}`

      this.$http.delete(url).then(() => {
        // eslint-disable-next-line no-undef
        $('#delProduct').modal('hide')
        this.isLoading = false
        this.$bus.$emit('message:push',
          '商品刪除成功',
          'success')
        this.getProducts()
      })
    }
  }
}
</script>

<style lang="css">
@import '~vue2-editor/dist/vue2-editor.css';

/* Import the Quill styles you want */
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css';
</style>
