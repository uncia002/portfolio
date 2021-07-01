<template>
  <div class="list">
    <div class="works">
      <div style="margin-bottom:50px;">
        <p class="title">website.</p>
        <div v-for="(item,index) in website" :key="item.name" :link="item.link" class="work">
          <router-link :to="item.link" class="hover">
            {{ item.name }}
          </router-link>
        </div>
      </div>
      <div style="margin-bottom:50px;">
        <p class="title">other.</p>
        <div v-for="(item,index) in other" :key="item.name" :link="item.link" class="work">
          <router-link :to="item.link" class="hover">
            {{ item.name }}
          </router-link>
        </div>
      </div>
      <div>
        <p class="title">about me.</p>
        <div class="work">
          <router-link to="whoami" class="hover">
            Niwasaki
          </router-link>
        </div>
      </div>
    </div>
    <!-- <div class="border">

    </div> -->
  </div>
</template>

<script>

export default{
  data(){
    return{
      website:[
        {name:'Wien',link:'wien'},
        {name:'Modernism',link:'modernism'},
      ],
      other:[
        {name:'Aranze',link:'ARANZE'},
        {name:'Shape',link:'st'},

      ]

    }
  },
  computed:{
  }
}
</script>

<style>

.list{
  position: fixed;
  width: 200px;
  height: 100%;
  background-color: #DDDDDD;
}
.works{
  margin-left:25px;
  padding-top: 25px;
}
.title{
  font-family: BebasNeue;
  color: black;
  margin:0;
  font-weight: 800;
}
.work{
  margin:0;
}
.work a{
  margin:0;
  text-decoration: none;
  font-family: 'Morganite';
  color: #121212;
  font-size: 60px;
  font-weight: 400;
  color:#121212;
  position: relative;
  display: inline-block;
}
a::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: #333;
  transform: scale(0, 1);
  transform-origin: left top;
  transition: transform .3s;
}
a:hover::after {
  transform: scale(1, 1);
}
.border{
  position:absolute;
  left:10px;
  top: 30px;
  width:80%;
  height: 70px;
  border:5px solid black;
}
</style>
