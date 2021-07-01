<template>
  <div class="home">
    <div class="lay">
      <h1>Hi Visitor!</h1>
      <h3>左のリストから閲覧するアプリを見ていってください!</h3>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>
<style scoped>
.home{
  width: 100%;
  height: 100%;
  text-align: center;
  font-family: Morganite;
  position: relative;
  background-image: url("../assets/dor.png");
  background-size: cover;
}
.lay{
  position: absolute;
  font-size: 80px;
  width: 80%;
  left: 50%;
  top:50%;
  color: black;
  transform: translateX(-50%) translateY(-50%);
  color: lightgray;
}
.lay h1{
  mix-blend-mode: difference;
  margin:0;
}
.lay h3{
  font-size: 30px;margin:0;
}

</style>
