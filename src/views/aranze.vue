<template>
  <div class="window">
    <div class="appinfo">
      <div class="overview">
        <div class="name">
          <h1>Aranze</h1>
        </div>
        <div class="text">
          <p>このアプリは2019年のHackU OSAKAに部員6人で参加したときの作品です。</p>
          <p>スマホのARで"チャリ走"っぽいゲームをするARANZEというアプリを制作しました。従来のチャリ走は2Dでタップのみで操作しますが、このアプリは3Dでかつステージが一直線ではないので視点を変えながらキャラクター操作もしなければならないというリアルアクション性を追加したアプリです。
          </p>
        </div>
      </div>
      <div style="height:150px;">
        <dl>
        <dt>URL</dt>
        <dd><a href="https://github.com/uncia002/ARANZE">github</a></dd>
        <dt>制作期間</dt>
        <dd>2週間</dd>
        <dt>制作環境</dt>
        <dd>Unity</dd>
        <dd>ARCore</dd>
        <dt>チーム員</dt>
        <dd>部員6人(同級生2人+新入生4人)</dd>
        <dt>役割</dt>
        <dd>AR関連とマップ自動生成、プロジェクトリーダーを担当しました。</dd>
      </dl>
      </div>
      <div class="img">
        <p>プレイ風景、地面認識、ステージ</p>
        <img src="@/assets/aranzeui.png">
        <img src="@/assets/aranzeninsi.png">
        <img src="@/assets/aranzemap.png">
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
  margin: 0;
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
  margin-top: 100px;
  margin-bottom: 100px;
  display:inline-block;
}
.img img{
  object-fit: contain;
  max-width: 500px;
  width: 100%;
}
</style>
