<template>
  <div class="window">
    <div class="appinfo">
      <div class="overview">
        <div class="name">
          <h1>Shape&Texture</h1>
        </div>
        <div class="text">
          <p>Shape&Textureは学校の授業の一環で作成したモーショングラフィックスです。学校の授業でPR動画を作るという授業があり、Aviutlを学習することになりました。リファレンスを探している内にモーショングラフィックスという世界を知り、とても見入ってしまいました。そして自分でこのシェイプアニメーションを作りました。この作品は自分がデザインに興味を持ったきっかけとなった作品です。</p>
        </div>
      </div>
      <div style="height:70px;">
        <dl>
          <dt>制作期間</dt>
          <dd>1週間</dd>
          <dt>制作環境</dt>
          <dd>Aviutl</dd>

        </dl>
      </div>
      <div class="movie">
        <video src="@/assets/ganbatta.mp4" loop autoplay muted></video>
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
  max-width: 500px;
  margin-bottom: 100px;
  display:inline-block;
  border:solid 1px black;
}
.movie video{
  object-fit: contain;
  width: 100%;
}
</style>
