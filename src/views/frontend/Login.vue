<template>
  <div class="container text-center">
      <Loading :active.sync="isLoading" />
      <form class="form-signIn my-5" @submit.prevent="login">
          <h1 class="h3 mb-3 font-weight-normal">Aiden's Garden</h1>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" v-model="user.email" placeholder="Email address" required autofocus>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control" v-model="user.password" placeholder="Password" required>
          <button type="submit" class="btn btn-lg btn-info btn-block mt-5" >登入</button>
          <p class="mt-5 mb-3 text-muted">&copy; 2020 Aiden's Garden</p>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    // 登入
    login () {
      this.isLoading = true
      const apiUrl = `${process.env.VUE_APP_APIPATH}api/auth/login`
      // 將 user 輸入的資料 post 給 api
      this.$http.post(apiUrl, this.user).then((response) => { // 接收 api 回傳的 token 及 效期
        const token = response.data.token
        const expired = response.data.expired
        // 將收到的資訊寫進 cookie
        document.cookie = `token=${token}; expires=${new Date(expired * 1000)};`
        // 跳出提示視窗
        this.$bus.$emit('message:push',
          '登入成功',
          'success')
        this.isLoading = false
        this.$router.push('/admin/products')
      }).catch((error) => {
        this.$bus.$emit('message:push',
          `帳號或密碼錯誤，請重新登入
            ${error}`,
          'danger')
        this.isLoading = false
      })
    }
  }
}
</script>
