import dataProduct from './product.json'


export default defineEventHandler(async () => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(dataProduct)
    }, 2000)
  })
})