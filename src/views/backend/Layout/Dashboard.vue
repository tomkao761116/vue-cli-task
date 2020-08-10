<template>
    <div>
      <Navbar />
        <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <main
          role="main"
          class="col-md-9 ml-sm-auto col-lg-10 px-md-4"
        >
        <router-view
          v-if="checkSuccess"
          :token="token"
        />
        </main>
      </div>
    </div>
    </div>
</template>

<script>
import Navbar from '@/components/backend/Navbar.vue'
import Sidebar from '@/components/backend/Sidebar.vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Sidebar
  },
  data () {
    return {
      token: '',
      uuid: process.env.VUE_APP_UUID,
      checkSuccess: false
    }
  },
  created () {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // 取得 token
    console.log(this.token)
    const apiUrl = `${process.env.VUE_APP_APIPATH}api/auth/check`
    this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
    this.$http.post(apiUrl, {
      api_token: this.token
    })
      .then((res) => {
      // 登入沒有問題
        console.log(res)
        if (res.data.success) {
          this.checkSuccess = true
        }
      }).catch((err) => {
      // 驗證失敗，轉回登入頁
        this.$bus.$emit('message:push',
        `發生錯誤，請重新登入
          ${err}.data.message}`,
        'danger')
        this.$router.push('/login')
      })
  }
}
</script>
