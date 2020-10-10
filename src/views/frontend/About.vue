<template>
  <div class="main-area">
    <loading :active.sync="isLoading"></loading>
      <div class="container">
        <main role="main" class="my-4">
          <section class="centralPicture row justify-content-start align-items-center pb-3">
            <!-- 中央大圖 -->
            <img class="aboutUsImg" src="../../assets/imgs/aboutUsImg.jpg" alt="Mobirise">
            <div class="container">
              <div class="row justify-content-md-end">
                <div class="col-lg-6 col-md-12">
                  <h2 class="align-right pb-4 pr-4 display-1">
                    <div class="text-left">Aiden's</div>
                    <div class="text-right">Garden</div>
                  </h2>
                  <div class="text-wrap text-left">
                    <h5 class="pb-2 align-start display-5">「植物也可以是人類最忠實的朋友」</h5>
                    <h5 class="pb-2 pr-3 text-right display-5"> ─ By Aiden</h5>
                    <p class="mb-0">
                      Aiden 覺得，人生不該成天坐在電腦前加班，原本只是想讓堆滿文件的辦公桌面、填滿程式碼的電腦桌面，增添點綠色氣息，看著也療癒。不知何時，開始會對著桌上的多肉訴說日常生活，好像多了個朋友似的，疲憊的心靈也稍微被補充了點能量。他覺得，應該讓這些能量散播出去，溫暖大家的心。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="my-5"></div>
          <section class="aboutUsInfo row justify-content-center align-items-center pt-3">
            <!-- 左邊聯絡資訊 -->
            <div id="contactUs" class="col-md-6">
              <div class="contactUs p-5  text-left">
                <h5 class="text-center">聯絡我們</h5>
                <hr>
                <ul class="contactUsContent">
                  <li>
                    <p class="my-3">Aiden 跟他的好夥伴們沒事的時候很愛到處亂跑，但多半會出現在花花草草聚集的地區，歡迎透過以下方式聯絡我們</p>
                  </li>
                  <li>
                    <p>聯絡電話：0910234567</p>
                  </li>
                  <li>
                    <p>活動時間：週六、週日 10:00 ~ 18:00</p>
                  </li>
                  <li>
                    <p>活動地點：哪裡綠的讓你覺得很舒服，就往那找找看吧，Aiden 或許就在那兒！</p>
                  </li>
                </ul>
              </div>
            </div>
            <div id="findUs" class="col-md-6 p-3">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.7597095552563!2d121.50803282920387!3d25.032755998998304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAxJzU3LjkiTiAxMjHCsDMwJzMwLjkiRQ!5e0!3m2!1szh-TW!2stw!4v1598881043974!5m2!1szh-TW!2stw" width="400" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </section>
        </main>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      fullPage: true
    }
  }
}
</script>
