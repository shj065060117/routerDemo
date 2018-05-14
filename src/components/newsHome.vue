<template>
  <div class="newsHome">
      <Header></Header>
      <Banner></Banner>
      <Alltype></Alltype>
      <newsList></newsList>
  </div>
</template>

<script>
import Header from './Header';
import Banner from './Banner';
import Alltype from './Alltype';
import newsList from './newsList';


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Header,Banner,Alltype,newsList,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
