import xhr from '../xhr/http'

/**
 * 银行卡管理 API
 */
class BankCardService {

  /**
   * 查看个人银行卡
   */
  loadMineBankCardList () {
    return xhr.fetch('/order/shopping/isOrderFull', {
      type: 'POST'
    })
  }
}

// 实例化后导出，全局单例
export default new BankCardService()
