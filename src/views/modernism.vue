<template>
  <div class="window">
    <div class="appinfo">
      <div class="overview">
        <div class="name">
          <h1>Modernism</h1>
        </div>
        <div class="text">
          <p>Modernismはインテリア時計アプリです。任意のトリガーを設定し、そのトリガーが起動した数に応じてデザインが変わるアプリです。例えば、自社の会社のホームページのアクセスをトリガーとして設定するとアクセスされるごとにデザインが変化していきます。実行例動画は0.1秒毎をトリガーとしています。Anime.js、svgアニメーションを学習する過程で作ったものです。
          </p>
        </div>
      </div>
      <div style="height:50px;">
        <dl>
        <dt>URL</dt>
        <dd><a href="https://github.com/uncia002/modernism">github</a></dd>
        <dt>制作期間</dt>
        <dd>1週間</dd>
        <dt>制作環境</dt>
        <dd>Vue.js</dd>
        <dd>Anime.js</dd>
        <dd>webpack</dd>

      </dl>
      </div>
      <div class="movie">
        <video src="@/assets/modenism.mp4" loop autoplay muted></video>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
    }
  }
}
</script>

<style scoped>
.window{
  width: 100%;
  min-height: 100%;
  background-color:#EEE;
  padding-top:30px;
}
.appinfo{
  width: 90%;
  margin: auto;
  font-family: Modernist;
}
.overview{
}
p{
  font-family: serif;
  font-size: 15px;
  font-weight: 900;
}
dl{
  font-family: serif;
}
dt {
  float: left;
  clear: left;
  margin-right: 0.5em;
  width: 120px;
  font-weight: 900;
  color:darkgray;
}

dd {
	float:left;
	margin-left:1em;
  color:black;
}
.movie{
  width: 100%;
  margin-top:50px;
  margin-bottom: 100px;
  display:inline-block;
  border:solid 1px black;
}
.movie video{
  object-fit: contain;
  width: 100%;
}
</style>
