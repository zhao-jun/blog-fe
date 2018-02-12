import { observable,action } from 'mobx'

// 点击次数
class homeStore {
  @observable xs;
  @observable ys;
  @observable zs;
  @observable show;

  constructor(){
    this.xs = [];
    this.ys = [];
    this.zs = [];
    this.show = false;
  }

  @action changeShow = (status) => {
    this.show = status
  }

  @action changeXYZ = (xs, ys, zs) => {
    this.xs = xs
    this.ys = ys
    this.zs = zs
  }

  @action changeReset = () => {
    this.show = false;
    this.xs = []
    this.ys = []
    this.zs = []
  }
}

export default new homeStore()
