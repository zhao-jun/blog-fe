import React from  'react';
import './toast.less'
import { observer, inject } from 'mobx-react'

// 以后细化区分成功和错误
// @inject(toast)
// @observer
const Toast = inject("toastStore")(observer(({toastStore}) =>
    <div className="toast" style={{ "display": toastStore.message ? "block" : "none"}}>
        <span className="content">{toastStore.message}</span>
    </div>
))

export default Toast;
