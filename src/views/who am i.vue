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
      <div style="height:100px;">
        <dl>
          <dt>my夢</dt>
          <dd>cekaiのようなデザイナーチームにWebデザイナーとして入り、自分のアイデアを模索していき、自分が求める究極を見つけたい</dd>
        </dl>
      </div>
      <div class="his">
        <h3>主に参加したコンテスト</h3>
        <ul>
          <li>HackU OSAKA 2018</li>
          <li>群馬プログラミングアワード</li>
          <li>HackU OSAKA 2019</li>
          <li>パソコン甲子園</li>
          <li></li>
        </ul>
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
  font-size: 30px;
}
dt {
  float: left;
  clear: left;
  margin-right: 0.5em;
  width: 120px;
  font-weight: 900;
  font-size: 40px;
  color:darkgray;
}

dd {
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
  margin-top:100px;
  font-family: serif;
}
h3{
  font-weight: 400;
}
li{

}
</style>
