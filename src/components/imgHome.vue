<template>
  <div class="imgHome">
      <Header></Header>
      <Banner></Banner>
      <AllType></AllType>
      <imgList></imgList>
  </div>
</template>

<script>
import Header from './Header';
import Banner from './Banner';
import AllType from './AllType';
import imgList from './imgList';
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components:{
    Header,Banner,AllType,imgList,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
