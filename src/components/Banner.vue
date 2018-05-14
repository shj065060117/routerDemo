<template>
  <div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in bannerData" :key="index">
            <a  :hrev="item.nHrefs" v-on:click="showPreview(index,bannerData,swiperObj)">
              <figure class="wp-avatar banner">
                <img v-cloak :src="item.imgSrc"/>
              </figure>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  data () {
    return {
     bannerData:[{
       imgSrc:require('../common/images/bn1.jpg'),
       title:"banner1",
       nHrefs:"http://www.baidu.com"
     },{
       imgSrc:require('../common/images/bn2.jpg'),
       title:"banner1",
       nHrefs:"http://www.baidu.com"
     },{
       imgSrc:require('../common/images/bn3.jpg'),
       title:"banner1",
       nHrefs:"http://www.baidu.com"
     },{
       imgSrc:require('../common/images/bn4.jpg'),
       title:"banner1",
       nHrefs:"http://www.baidu.com"
     },{
       imgSrc:require('../common/images/bn5.jpg'),
       title:"banner1",
       nHrefs:"http://www.baidu.com"
     },{
       imgSrc:require('../common/images/bn6.jpg'),
       title:"banner1",
       nHrefs:"http://www.baidu.com"
     }]
    }
  },
  mounted(){
     setTimeout(function () {
      var swiperObj =  new Swiper('#swiper', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 2000,
        paginationClickable: true
      });
    }, 100)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#swiper{width: 750px; height: 400px; overflow: hidden;}
#swiper img{display: block; width: 750px; height: 400px; overflow: hidden;}
</style>
