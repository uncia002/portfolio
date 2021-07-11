<template>
  <div class="window">
    <div class="appinfo">
      <div class="overview">
        <div class="name">
          <h1>Wien</h1>
        </div>
        <div class="text">
          <p>Wienは '画像を用いたテーブルグラフ' を簡潔に、優れたデザインで作るためのWebツールです。テーブルグラフを作るにはトリミング、描画、配置など細かな作業が多く、時間を無駄にしてきました。このアプリではそれらの作業を一つにアプリにまとめ、web上で作業できるようにしました。ドラッグアンドドロップやマウスでトリミングなどUXの向上も図っています</p>
        </div>
      </div>
      <div style="height:50px;">
        <dl>
        <dt>機能</dt>
        <dd>画像のアップロード</dd>
        <dd>画像のトリミング</dd>
        <dd>drag&drop</dd>
        <dd>デザインのカスタマイズ</dd>
        <dd>他のユーザーが作成した画像のセットをインポートできる</dd>
        <dt>URL</dt>
        <dd><a href="https://uncia002.github.io/wien/#/">AppURL</a></dd>
        <dd><a href="https://github.com/uncia002/wien">github</a></dd>
        <dd><a href="https://www.youtube.com/watch?v=ZOvA-0TlpM4">使用例動画</a></dd>
        <dt>制作期間</dt>
        <dd>1ヶ月</dd>
        <dt>制作環境</dt>
        <dd>Vue.js</dd>
        <dd>Django</dd>
        <dd>heroku</dd>
        <dd>cloudinore</dd>
        <dd>webpack</dd>

      </dl>
      </div>

      <div class="img">
        <p>画像の出力例1、画像の出力例2、アプリの外見、トリミングの様子</p>
        <img src="@/assets/out.png">
        <img src="@/assets/tablegraph.png" alt="dfafad">
        <img src="@/assets/home.png">
        <img src="@/assets/trim.png">
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
.img{
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
  display:inline-block;
}
.img img{
  object-fit: contain;
  max-width: 500px;
  height:300px;
}
</style>
