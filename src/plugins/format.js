export default {
  install: (app) => {
    app.config.globalProperties.$currencyFormat = (number) => {
      const price = typeof number === 'string' ? parseFloat(number) : number
      return 'NT' + price.toLocaleString('zh-TW', { style: 'currency', currency: 'TWD' })
    }
  }
}
