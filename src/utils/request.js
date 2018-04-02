import Config from '../config'
import toastStore from '../stores/toast'

export default async (type = 'GET', url = '', data = {}, token = '', method = 'fetch') => {
  type = type.toUpperCase()
  url = Config.target + url
  let aData = [] // 存储数据
  let sData = '' // 拼接数据
  for (let attr in data) {
    aData.push(attr + '=' + data[attr])
  }
  sData = aData.join('&')
  if (type === 'GET') {
    if (sData) url = url + '?' + sData
  }
  let cookies
  if (cookies && cookies.blogToken && !token) token = cookies.blogToken
  return new Promise((resolve, reject) => {
    let res
    if (window.XMLHttpRequest) {
      res = new XMLHttpRequest()
    } else if (window.ActiveXObject) {
      // ie兼容
      // res = new ActiveXObject
    }
    res.open(type, url, true)
    res.setRequestHeader('Accept', 'application/json')
    res.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    res.setRequestHeader('Authorization', token)
    res.send(sData)
    res.onreadystatechange = () => {
      if (res.readyState === 4) {
        if (res.status === 200) {
          let obj = res.response
          if (typeof obj !== 'object') {
            obj = JSON.parse(obj)
          }
          if (obj.code === 'TOKEN_EXPIRE') { // TOKEN失效！
            if (cookies && cookies.wxToken) delete cookies.wxToken
            // Store.set(Config.constants.cookies, cookies)
            // todo
          } else {
            resolve(obj)
          }
        } else {
          toastStore.setMeaasge(res.data)
          reject(res)
        }
      }
    }
  })
}
