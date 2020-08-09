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
      uuid: process.env.VUE_APP_UID,
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
