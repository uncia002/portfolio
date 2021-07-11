<template>
  <div class="home">
    <div class="para">
    </div>
    <div class="lay">
      <h1>Select the TITLE you want to browse from the list on the left</h1>
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
  position: relative;
  background-size: cover;
  font-family: Modernist;
  background-color: #202020;
}
.para{
  position:absolute;
  left: 50%;
  top:50%;
  color: black;
  transform: translateX(-50%) translateY(-50%);
  display: flex;

}
.circle{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border:1px solid black;
}

.lay{
  position: absolute;
  font-size: 30px;
  width: 80%;
  left: 50%;
  top:50%;
  color: white;
  transform: translateX(-50%) translateY(-50%);
}
.lay h1{
  mix-blend-mode: difference;
  margin:0;
  font-weight: 100;
}
.lay h3{
  font-size: 30px;margin:0;
}

</style>
