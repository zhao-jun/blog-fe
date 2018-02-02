import React from  'react';
import './toast.less'
import { observer, inject } from 'mobx-react'

// 以后细化区分成功和错误
// @inject(toast)
// @observer
const Toast = inject("toast")(observer(({toast}) =>
    <div className="toast" style={{ "display": toast.message ? "block" : "none"}}>
        <span className="content">{toast.message}</span>
    </div>
))

export default Toast;
