<template>
  <div>
      <loading :active.sync="isLoading"></loading>
      <div class="container">
        <main role="main" class="mt-5">
          <section id="centralPicture" class="row justify-content-center align-items-center">
            <!-- 中央大圖 -->
            <div class="jumbotron jumbotron-image" style="height:400px;">
              <div class="col-md-7 px-5 py-3 text-left">
                <h1 class="display-5 font-weight-bold">在繁忙的日常中，尋找片刻的寧靜</h1>
                <p class="lead text-muted my-3">豢養一盆多肉，為自己的心靈灌溉。從成堆的事務裡暫時抽離，拔除名為"煩惱"的雜草。讓心情平和、沉澱，找回遠離已久，平靜的自我。</p>
              </div>
            </div>
          </section>
          <section>
            <div class="row justify-content-lg-around align-items-center">
              <div id="contentFigure" class="col-md-6 justify-content-start align-self-center" >
                <img src="../../assets/imgs/daniel-oberg.jpg" alt="picture" media-simple="true" class="rounded py-2" width="80%" height="80%">
              </div>
              <div id="media-content" class="col-md-6 align-self-center px-5 py-2">
                <h3 class="pb-3 display-6"><span class="badge">溫<span class="ml-4">暖</span></span></h3>
                <div class="text-muted">
                  <p class="mb-1">
                    在繁忙的辦公環境，堆滿文件的辦公桌面上，
                  </p>
                  <p class="mb-1">
                    建立起自己的植感小天地。
                  </p>
                  <p class="mb-1">
                    讓綠意溫暖你的心，帶給你滿滿的正能量，
                  </p>
                  <p class="mb-1">
                    去面對生活中的每一個挑戰。
                  </p>
                </div>
                <div class="my-5"></div>
                <h3 class="pb-3 display-6"><span class="badge">陪<span class="ml-4">伴</span></span></h3>
                <div class="text-muted">
                  <p class="mb-1">
                    在家中，放上幾盆植栽，
                  </p>
                  <p class="mb-1">
                    迎接忙碌了一天，終於回到住處的你。
                  </p>
                  <p class="mb-1">
                    陪伴你度過這一個人，但又不想一個人度過的夜晚，
                  </p>
                  <p class="mb-1">
                    靜靜的聽你說說話，找回最真實的自己。
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div class="row justify-content-between align-items-center my-5">
              <div class="card card-ag col-12 col-md-6 col-lg-4 mb-4">
                <div class="card-wrapper">
                  <div class="card-img">
                      <img src="../../assets/imgs/succulent.jpg" alt="Succulent" width="100%">
                  </div>
                  <div class="card-box">
                      <h4 class="card-title pb-3 display-5">多肉植物</h4>
                      <p class="text-left px-1 display-7">
                        天生為因應惡劣環境而具備儲存大量水份的肥厚莖葉，變化多又容易養殖。常見的多肉屬仙人掌科和大戟科。
                      </p>
                  </div>
                </div>
              </div>
              <div class="card card-ag col-12 col-md-6 col-lg-4 mb-4">
                <div class="card-wrapper">
                  <div class="card-img">
                      <img src="../../assets/imgs/foliage.jpg" alt="Foliage" width="100%">
                  </div>
                  <div class="card-box">
                      <h4 class="card-title pb-3 display-5">觀葉植物</h4>
                      <p class="text-left px-1 display-7">
                        植物的葉形具觀賞價值，多數觀葉植物原生於高溫潮濕的熱帶雨林，耐陰又能適應日照不足環境，擺在室內外都十分適合。
                      </p>
                  </div>
                </div>
              </div>
              <div class="card card-ag col-12 col-md-6 col-lg-4 mb-4">
                <div class="card-wrapper">
                  <div class="card-img">
                      <img src="../../assets/imgs/herb.jpg" alt="Herb" width="100%">
                  </div>
                  <div class="card-box">
                      <h4 class="card-title pb-3 display-5">香草植物</h4>
                      <p class="text-left px-1 display-7">
                        通常果實、花、根、莖或葉子可作為香料用，台灣常見如迷迭香、檸檬香茅、羅勒、薄荷、馬鞭草等，可觀賞又具實用價值。
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  }
}
</script>
