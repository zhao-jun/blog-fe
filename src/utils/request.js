// import Store from 'store'
import Config from '../config'
// import wxAuth from './wxAuth'
// import Utils from './utils'
// import {Promise} from 'es6-promise'

const baseUrl = Config.target

export default async(type = 'GET', url = '', data = {}, token = '', method = 'fetch') => {
  type = type.toUpperCase()
  url = baseUrl + url
  // let postTimer
  // 避免重复POST请求
  // if (type === 'POST' || type === 'PUT') {
  //   // 此处对连续请求有限制，可通过在配置中增加url限制
  //   let result = Utils.repeatReq('save', url)
  //   if (result !== 0) {
  //     if (result === 3) return result
  //     postTimer = setTimeout(_ => Utils.repeatReq('clear', url), 3000)
  //   }
  // }
  let aData = [] // 存储数据
  let sData = '' // 拼接数据
  for (let attr in data) {
    aData.push(attr + '=' + data[attr])
  }
  sData = aData.join('&')
  if (type === 'GET') {
    if (sData) url = url + '?' + sData
  }
  // let cookies = Store.get(Config.constants.cookies)
  let cookies
  if (cookies && cookies.wxToken && !token) token = cookies.wxToken
  return new Promise((resolve, reject) => {
    let requestObj
    if (window.XMLHttpRequest) {
      requestObj = new XMLHttpRequest()
    } else if (window.ActiveXObject) {
      // ie兼容
      // requestObj = new ActiveXObject
    }
    requestObj.open(type, url, true)
    requestObj.setRequestHeader('Accept', 'application/json')
    requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    requestObj.setRequestHeader('Authorization', token)
    requestObj.send(sData)
    requestObj.onreadystatechange = () => {
      if (requestObj.readyState === 4) {
        if (requestObj.status === 200) {
          let obj = requestObj.response
          if (typeof obj !== 'object') {
            obj = JSON.parse(obj)
          }
          // 清除请求完成的POST
          // if (type === 'POST' || type === 'PUT') {
          //   Utils.repeatReq('clear', url)
          //   clearTimeout(postTimer)
          // }
          if (obj.code === 'TOKEN_EXPIRE') { // TOKEN失效！
            if (cookies && cookies.wxToken) delete cookies.wxToken
            // Store.set(Config.constants.cookies, cookies)
            // todo
          } else {
            resolve(obj)
          }
        } else {
          console.log(requestObj)
          reject(requestObj)
        }
      }
    }
  })
}
