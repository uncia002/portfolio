<template>
  <div class="window">
    <div class="appinfo">
      <div class="overview">
        <div class="name">
          <h1>NIWASAKI ITSU</h1>
        </div>
        <div class="text">
          <p>中学3年生にプログラミングを知り、独学でWebアプリケーション学び始める。高専に入学、システム研究部に入り、優秀な先輩方と出会い行動力を養い色々なイベントに参加するようになる。ARCoreを知り、ARについて学習を始める。モーショングラフィックスを知り、デザインを本格的に好きになる。デザインについて調べていくうちに"なめらかサンショウオ"さんの作品を見つけ、フロントエンドのUIUX奥深さを知りフロントエンドを学び始める。</p>
        </div>
      </div>
      <div style="height:200px;" class="dream">
        <dl>
          <dt>my夢</dt>
          <dd>cekaiのようなデザイナーチームにWebデザイナーとして入り、自分のアイデアを模索していき、自分が求める究極を見つけたい</dd>
        </dl>
      </div>
      <div class="his">
        <dl>
          <dt>主な参加イベント</dt>
          <dd>HackU 2018 OSAKA</dd>
          <dd>HackU 2019 OSAKA</dd>
          <dd>群馬プログラミングアワード</dd>
          <dd>パソコン甲子園</dd>
          <dt>スキル</dt>
          <dd>Vue.js</dd>
          <dd>Django</dd>
          <dd>Unity</dd>
          <dd>ARcore</dd>
          <dd>Aviutl</dd>
          <dt>言語</dt>
          <dd>javascript</dd>
          <dd>python</dd>
          <dd>C#</dd>
          <dd>mySQL</dd>

        </dl>
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
.dream dl{
  font-family: serif;
  font-size: 30px;
}
.dream dt {
  float: left;
  clear: left;
  margin-right: 0.5em;
  width: 120px;
  font-weight: 900;
  font-size: 40px;
  color:darkgray;
}

.dream dd {
	float:left;
	margin-left:1em;
  color:black;
}
.movie{
  max-width: 500px;
  margin-bottom: 100px;
  display:inline-block;
  border:solid 1px black;
}
.movie video{
  object-fit: contain;
  width: 100%;
}
.his{
  font-family: serif;
}
h3{
  font-weight: 400;
}
.his dl{
  font-family: serif;
}
.his dt {
  float: left;
  clear: left;
  margin-right: 0.5em;
  width: 120px;
  font-weight: 900;
  color:darkgray;
}

.his dd {
	float:left;
	margin-left:1em;
  color:black;
}
</style>
