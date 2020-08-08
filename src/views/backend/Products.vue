<template>
    <div>
      <loading :active.sync="isLoading"></loading>
        <h2>產品管理列表</h2>
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
            <div class="col-3 mt-auto mb-auto">{{ item.content }}</div>
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
    </div>
</template>

<script>
export default {
  name: 'Products',
  props: ['token'],
  data () {
    return {
      products: [],
      pagination: {}
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      const apiUrl = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/products`
      this.isLoading = true
      this.$http.get(apiUrl) // http 前面加 $ 字號，是為了跟我們自己訂的方法產生衝突
        .then((res) => {
          this.isLoading = false
          console.log(res)
          this.products = res.data.data // 把產品列表資料綁進 products [] 陣列裡頭
          this.pagination = res.data.meta.pagination
        })
    }
  }
}
</script>
