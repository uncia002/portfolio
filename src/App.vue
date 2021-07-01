<template>
  <div class="main">
    <div class="list-comp">
      <List/>
    </div>
    <div class="router">
      <router-view/>
    </div>
  </div>
</template>

<script>
import List from '@/components/List.vue'
export default {
  name: 'App',
  components: {
    List,
  }
}
</script>

<style>
@font-face {
  font-family: "Modernist";
  src: url("./assets/Modernist.otf");
}
@font-face {
  font-family: "Morganite";
  src: url("./assets/Morganite-Bold.ttf");
}
@font-face {
  font-family: "MorganiteLight";
  src: url("./assets/Morganite-Thin.ttf");
}
@font-face {
  font-family: "BebasNeue";
  src: url("./assets/BebasNeue.ttf");
}
*{
}
html{
  width: 100%;
  height: 100%;
}
body{
  margin:0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  width: 100%;
  height: 100%;
}
.main{
  width: 100%;
  height: 100%;
  display: flex;
}
.list-comp{
  width: 200px;
  height: 100%;
}
.router{
  width: calc(100% - 200px);
  height: 100%;
}
</style>
