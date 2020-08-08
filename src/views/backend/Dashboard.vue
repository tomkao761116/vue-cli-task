<template>
    <div>
        <h2>管理後台</h2>
        <div id="nav">
            <router-link to="/admin/products">產品列表</router-link> |
            <router-link to="/admin/coupons">優惠券列表</router-link> |
            <router-link to="/admin/orders">訂單管理</router-link> |
            <router-link to="/admin/images">圖片管理</router-link> |
            <router-link to="/">回前台</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      token: '',
      checkSuccess: false
    }
  },
  created () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}` // 取得 token
      const apiUrl = `${process.env.VUE_APP_APIPATH}api/auth/check`
      this.$http.post(apiUrl, {
        api_token: this.token
      })
        .then((res) => {
        // 登入沒有問題
          console.log(res)
          if (res.data.success) {
            this.checkSuccess = true
          }
        }).catch((res) => {
        // 驗證失敗，轉回登入頁
          console.log(res)
          this.$router.push('/login')
        })
    }
  }
}
</script>
