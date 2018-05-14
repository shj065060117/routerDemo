<template>
<div>
    <ul class="imgList" id="imgList">
        <li v-for="(item,index) in listData" :key="index">
          <router-link :to="{name:'Arts',params:{id:item.arcId}}">
            <img :src="item.imgSrc" alt="">
            <strong>{{item.title}}</strong>
          </router-link>  
        </li>
    </ul>
    <!-- 加载更多 -->
    <div id="loading" v-if="showHide"><img src="../common/ico/loading.png" alt=""></div> 
</div>
</template>

<script>
import bus from '../assets/eventBus';
export default {
  data () {
    return {
      listData:'',
      tpyeId:'',
      iNow:"",
      yesOrNo:true,
      showHide:true
    }
  },
  components:{},
   created () {
    var This=this;
    bus.$on("imgAllTypeId",function(data){
      This.tpyeId=data;
      let nData="";
      switch(This.tpyeId){
        case "0":
          nData=[{
            imgSrc:require('../common/images/bn4.jpg'),
            title:"百度图片二下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn4.jpg'),
            title:"百度图片二下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn4.jpg'),
            title:"百度图片二下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn4.jpg'),
            title:"百度图片二下",
            arcId:"1",          
          },{
            imgSrc:require('../common/images/bn4.jpg'),
            title:"百度图片二下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn4.jpg'),
            title:"百度图片二下",
            arcId:"1",
          }];
        break;
        case "1":
        case "2":
        case "3":
        case "4":
          nData=[{
            imgSrc:require('../common/images/bn5.jpg'),
            title:"百度图片四三二一下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn5.jpg'),
            title:"百度图片四三二一下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn5.jpg'),
            title:"百度图片四三二一下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn5.jpg'),
            title:"百度图片四三二一下",
            arcId:"1",          
          },{
            imgSrc:require('../common/images/bn5.jpg'),
            title:"百度图片四三二一下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn5.jpg'),
            title:"百度图片四三二一下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn5.jpg'),
            title:"百度图片四三二一下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn5.jpg'),
            title:"百度图片四三二一下",
            arcId:"1",          
          }];
        break;
        case "5":
        case "6":
        case "7":
        case "8":
          nData=[{
            imgSrc:require('../common/images/bn10.jpg'),
            title:"百度图片八七六五下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn10.jpg'),
            title:"百度图片八七六五下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn10.jpg'),
            title:"百度图片八七六五下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn10.jpg'),
            title:"百度图片八七六五下",
            arcId:"1",          
          },{
            imgSrc:require('../common/images/bn10.jpg'),
            title:"百度图片八七六五下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn10.jpg'),
            title:"百度图片八七六五下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn10.jpg'),
            title:"百度图片八七六五下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn10.jpg'),
            title:"百度图片八七六五下",
            arcId:"1",          
          }]; 
        break;
      }
      This.listData=nData;
    });
  },
  activated(){
    let This=this;
     window.onscroll=function(){//底部刷新加载新数据
          let oSrollT=document.documentElement.scrollTop||document.body.scrollTop;
          let oH=document.documentElement.clientHeight||document.body.clientHeight;
          if (document.getElementById("imgList")) {
            
            let aLi=document.getElementById("imgList").getElementsByTagName("li");
            let oEndSection=aLi[aLi.length-1];
            if(This.yesOrNo && (oSrollT+oH+40)>=(oEndSection.offsetTop+oEndSection.offsetHeight)){
                This.loadimg();
            }
          }
      }
  },
  mounted(){
      let This=this;
      setTimeout(()=>{
        This.showHide=false;
        This.loadDom();
      },500);
  },
  methods:{
      loadDom(){
          this.listData=[{
            imgSrc:require('../common/images/bn4.jpg'),
            title:"百度图片二下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn4.jpg'),
            title:"百度图片二下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn4.jpg'),
            title:"百度图片二下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn4.jpg'),
            title:"百度图片二下",
            arcId:"1",          
          },{
            imgSrc:require('../common/images/bn4.jpg'),
            title:"百度图片二下",
            arcId:"1",
          },{
            imgSrc:require('../common/images/bn4.jpg'),
            title:"百度图片二下",
            arcId:"1",
          }];
      },
      loadimg(){
        let This=this;
        This.iNow++;
        This.yesOrNo=false;
        This.showHide=true;
        let addData=[{
          imgSrc:require('../common/images/bn1.jpg'),
          title:"百度图片"+This.iNow+"下",
          arcId:"1"
        },{
          imgSrc:require('../common/images/bn2.jpg'),
          title:"百度图片"+This.iNow+"下",
          arcId:"1",
         }];
        setTimeout(()=>{
            This.listData=This.listData.concat(addData);
             This.yesOrNo=true;
             This.showHide=false;
        },500)
        
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imgList{padding: 30px 0; overflow: hidden;}
.imgList li{height: 280px;width:360px; float: right; overflow: hidden}
.imgList li:nth-child(2n){float: left;}
.imgList li a{color: #333;}
.imgList li img{display: block; width: 360px; height: 200px; overflow: hidden}
.imgList li strong{display: block;height: 80px; font: 700 26px/80px "microsoft yaihei"; color: #333; overflow: hidden; }
#loading{height: 70px; overflow: hidden; border-top: 5px solid #CCC;}
#loading img{display: block; width: 50px; height: 50px; margin: 10px auto 0;-webkit-animation:linear 2s radius infinite;animation:linear 2s radius infinite;}

@-webkit-keyframes radius{
	0%{-webkit-transform: rotate(0deg)}
	100%{-webkit-transform: rotate(360deg)}
	
}
@keyframes radius{
	0%{transform: rotate(0deg)}
	100%{transform: rotate(360deg)}
}

</style>
