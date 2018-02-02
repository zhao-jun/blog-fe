import { observable,action } from 'mobx'

// 点击次数
class toastStore {
  @observable message;

  constructor(){
    this.message = ''
  }

  @action setMeaasge = (msg, time = 1000) =>{
    this.message = msg
    setTimeout(() => this.message = '', time)
  }
}

export default new toastStore()
