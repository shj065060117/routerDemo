<template>
 <div class="allType">
      <strong data-tpyeid="0">全部</strong>
      <div class="types" id="allTypes">
        <span v-for="(item,index) in allType" :key="index" :data-typeid="item.typeId" v-on:click="updateType(item.typeId)">{{item.title}}</span>
      </div>
    </div>
</template>

<script>
import bus from '../assets/eventBus'
export default {
  data () {
    return {
     allType:[{
       title:"分类1",
       typeId:"1"
     },{
       title:"分类2",
       typeId:"2"
     },{
       title:"分类3",
       typeId:"3"
     },{
       title:"分类4",
       typeId:"4"
     },{
       title:"分类5",
       typeId:"5"
     },{
       title:"分类6",
       typeId:"6"
     },{
       title:"分类7",
       typeId:"7"
     },{
       title:"分类8",
       typeId:"8"
     }]
    }
  },
  mounted(){
    
  },
  methods:{
      updateType(id){
          let tyieId=id;
          this.clearType();
          event.target.className="active";
          let nHf=window.location.href;
          
          setTimeout(function(){
              if (nHf.includes('newshome')) {
                  bus.$emit("newsAllTypeId",tyieId);
              }else if(nHf.includes('imghome')){

                  bus.$emit("imgAllTypeId",tyieId);
              }
              
          },50);
      },
      clearType(){
        let aSpan=document.getElementById("allTypes").getElementsByTagName("span");
        Object.keys(aSpan).forEach((item,index)=>{
          aSpan[index].className="";
        })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::-webkit-scrollbar{background: transparent;} 
.allType{width: 100%; height: 120px; position:relative;}
.allType strong{float: left; margin: 30px 0 0 20px; position:relative; padding-left: 60px; width: 90px; height: 60px;display: block; background: #F4F4F4; border-radius: 10px;font-size: 28px;color: #FF8800;line-height: 60px;}
.allType strong::before{display: block; position: absolute; left: 20px; top: 16px; width: 30px; height: 30px; content: ""; background:url(../common/ico/ico1.png) no-repeat left top; background-size: 100% 100%;}
.allType .types{overflow: hidden;white-space: nowrap; overflow-x: scroll;margin-left: 200px;}
.allType .types span{font-size: 28px;color: #333;line-height: 120px;margin-right:52px;display: inline-block; white-space: nowrap;text-decoration: none;}
.allType .types span.active{color:#FF8800;}
</style>
