/**
 * @description
 * 在 server 目录下，有两个路径，一个是 api，另一个是 routes，这是在 nuxt.js 中创建服务器端点的两种方法，区别在于，api 创建的服务器端点，访问的时候需要加上‘/api’，比如 http://localhost:3000/api/hello，而 routes 创建的服务器端点，访问的时候不需要加上‘/api’，比如 http://localhost:3000/hello
 */
export default defineEventHandler((event) => {
  return {
    hello: 'world'
  }
})


