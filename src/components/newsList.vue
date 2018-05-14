<template>
<div>
    <ul class="newsList" id="newsList">
        <li v-for="(item,index) in listData" :key="index">
          <router-link :to="{name:'Article',params:{id:item.arcId}}">
            <img :src="item.imgSrc" alt="">
            <strong>{{item.title}}</strong>
            <span>{{item.description}}</span>
          </router-link>  
        </li>
    </ul>
    <!-- 加载更多 -->
    <div id="loading" v-if="showHide"><img src="../common/ico/loading.png" alt=""></div> 
</div>
</template>

<script>
import Banner from './Banner';

import bus from '../assets/eventBus'
export default {
  name: 'HelloWorld',
  data () {
    return {
      listData:'',
      tpyeId:'',
      iNow:"",
      yesOrNo:true,
      showHide:true
    }
  },
  activated(){
    alert(1)
  },
  components:{},
  created () {
    var This=this;
    bus.$on("newsAllTypeId",function(data){
      This.tpyeId=data;
      let nData="";
      switch(This.tpyeId){
        case "0":
          nData=[{
            imgSrc:require('../common/images/bn1.jpg'),
            title:"百度一下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。'
          },{
            imgSrc:require('../common/images/bn2.jpg'),
            title:"百度一下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。'
          },{
            imgSrc:require('../common/images/bn3.jpg'),
            title:"百度一下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。'
          },{
            imgSrc:require('../common/images/bn4.jpg'),
            title:"百度一下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。'
          },{
            imgSrc:require('../common/images/bn5.jpg'),
            title:"百度一下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。'
          },{
            imgSrc:require('../common/images/bn6.jpg'),
            title:"百度一下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。'
          }];
        break;
        case "1":
        case "2":
        case "3":
        case "4":
          nData=[{
            imgSrc:require('../common/images/bn2.jpg'),
            title:"百度一二三四下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力。'
          },{
            imgSrc:require('../common/images/bn2.jpg'),
            title:"百度一二三四下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力。'
          },{
            imgSrc:require('../common/images/bn2.jpg'),
            title:"百度一二三四下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力。'
          }];
        break;
        case "5":
        case "6":
        case "7":
        case "8":
          nData=[{
            imgSrc:require('../common/images/bn3.jpg'),
            title:"百度5678下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。'
          },{
            imgSrc:require('../common/images/bn3.jpg'),
            title:"百度5678下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。'
          },{
            imgSrc:require('../common/images/bn3.jpg'),
            title:"百度5678下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。'
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
          if (document.getElementById("newsList")) {
            let aLi=document.getElementById("newsList").getElementsByTagName("li");
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
            imgSrc:require('../common/images/bn1.jpg'),
            title:"百度一下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。'
          },{
            imgSrc:require('../common/images/bn2.jpg'),
            title:"百度一下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。'
          },{
            imgSrc:require('../common/images/bn3.jpg'),
            title:"百度一下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。'
          },{
            imgSrc:require('../common/images/bn4.jpg'),
            title:"百度一下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。'
          },{
            imgSrc:require('../common/images/bn5.jpg'),
            title:"百度一下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。'
          },{
            imgSrc:require('../common/images/bn6.jpg'),
            title:"百度一下",
            arcId:"1",
            description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。'
          }];
      },
      loadimg(){
        let This=this;
        This.iNow++;
        This.yesOrNo=false;
        This.showHide=true;
        let addData=[{
          imgSrc:require('../common/images/bn1.jpg'),
          title:"百度"+This.iNow+"下",
          arcId:"1",
          description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。'
        },{
          imgSrc:require('../common/images/bn2.jpg'),
          title:"百度"+This.iNow+"下",
          arcId:"1",
          description:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。'
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
.newsList{padding: 30px 0; overflow: hidden;}
.newsList li{height: 200px; margin-bottom: 30px; overflow: hidden}
.newsList li img{float: left; width: 300px; height: 200px; overflow: hidden}
.newsList li strong,.newsList li span{width: 430px; float: right; text-align: left;}
.newsList li strong{font: 100 26px/30px "microsoft yaihei"; color: #333; overflow: hidden; }
.newsList li span{font: 100 24px/30px "microsoft yaihei"; color: #666; height: 150px;margin-top: 15px;overflow: hidden; }
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
