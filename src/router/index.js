import Vue from 'vue'
import Router from 'vue-router'
import newsHome from '@/components/newsHome'
import imgHome from '@/components/imgHome'
import Article from '@/components/Article'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'newsHome',
      component: newsHome
    },
    {
      path: '/newshome',
      name: 'newsHome',
      component: newsHome,
      meta: {
        keepAlive: true, //此组件需要被缓存
        
    }
    },
    {
      path: '/imghome',
      name: 'imgHome',
      component: imgHome,
      meta: {
        keepAlive: true, //此组件需要被缓存
        
    }
    },
    {
      path: '/newshome/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/imghome/:id',
      name: 'Arts',
      component: Article
    }
  ]
})
