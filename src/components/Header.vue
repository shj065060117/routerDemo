<template>
 <div class="header">
    <div class="close" v-on:click="getBack()"><img src="../common/ico/headclose.png" alt=""></div>
    <div class="nav">
      <router-link  v-for="(item,index) in headData" :key="index" :to="item.nHrefs">{{item.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     headData:[{
       title:"新闻",
       nHrefs:"/newshome"
     },{
       title:"图片",
       nHrefs:"/imghome"
     }
    //  ,{
    //    title:"热点",
    //    nHrefs:"/hotshome"
    //  },{
    //    title:"社会",
    //    nHrefs:"/sociologyhome"
    //  },{
    //    title:"汽车",
    //    nHrefs:"cathome"
    //  },{
    //    title:"军事",
    //    nHrefs:"/militaryhome"
    //  },{
    //    title:"体育",
    //    nHrefs:"sporthome"
    //  },{
    //    title:"时尚",
    //    nHrefs:"/fashionhome"
    //  }
     ]
    }
  },
  mounted(){

  },
  methods:{
    getBack(){
      this.$router.back(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::-webkit-scrollbar{background: transparent;} 
.header{height: 100px;width: 100%; box-sizing: border-box;background: #f4f5f6;}
.header .close{width: 90px; height: 90px; float: left; margin-top: 5px; overflow: hidden}
.header .close img{display: block; width: 48px; height: 48px; margin: 21px 0 0 21px;}
.header .nav{overflow: hidden;white-space: nowrap; overflow-x: scroll; margin-left: 100px;}
.header .nav a{font-size: 30px;color: #828393;letter-spacing: 0;line-height: 100px;margin-right:52px;display: inline-block; white-space: nowrap;text-decoration: none;}
.header .nav a.router-link-exact-active{font: bold 34px/70px "microsoft yahei"; color: peru}
</style>
