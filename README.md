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
改实例功能主要是实现页面前进刷新；后退不刷新数据；
因为页面中有分类需要来回切换；以及上推需要重新添加新数据；所以使用了activated()方法来挂在页面向上推时添加数据的方法
