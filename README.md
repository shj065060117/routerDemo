# routerdemo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
说明:
改实例功能主要是实现页面前进刷新；后退不刷新数据；也就是说一级路由跳转到二级路由时；二级路由页面重新渲染；但是从二级路由返回一级路由不渲染；使用vue缓存技术，但是一级路由之间的切换是要重新渲染数据的；
