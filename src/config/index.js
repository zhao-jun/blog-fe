export default {
  // 暂用公司接口
  target: process.env.NODE_ENV === 'development' ? 'http://mcwp.test.zhudb.com/backend' : (process.env.NODE_ENV === 'test' ? 'http://mcwp.test.zhudb.com/backend' : (process.env.NODE_ENV === 'advance' ? window.location.protocol + '//' + window.location.host + '/backend' : window.location.protocol + '//' + window.location.host + '/backend')), // 接口配置
}
