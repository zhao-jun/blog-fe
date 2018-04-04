import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './other.less';

class Other extends Component {
  constructor (props) {
    super(props)
    this.state = {
      current: '',
      contentArr: [
        {
          title: 'Canvas1',
          link: '/canvasBg'
        },
        // {
        //   title: 'Canvas2',
        //   link: '/canvasBg'
        // },
        // {
        //   title: 'Canvas3',
        //   link: '/canvasBg'
        // },
        // {
        //   title: 'Canvas4',
        //   link: '/canvasBg'
        // },
        // {
        //   title: 'Canvas5',
        //   link: '/canvasBg'
        // },
        // {
        //   title: 'Canvas6',
        //   link: '/canvasBg'
        // }
      ]
    }
  }

  componentDidMount () {
    // 阻止默认事件
    document.ondragover = function(e){e.preventDefault();}          // 必须设置dragover阻止默认事件
    document.ondrop = function(e){e.preventDefault();}
  }
  // 拖动开始
  dragstart = (e, index) => {
    e.target.style.backgroundColor = '#000';  // 设置拖动元素的背景
    this.current = this.state.contentArr[index]
  }
  // 拖动过程
  drag = (e) => {
    e.target.style.backgroundColor = '#000';  // 设置拖动元素的背景
  }
  // 拖动结束
  dragend = (e) => {
    e.target.style.backgroundColor = '#f7f7f7';  // 恢复拖动元素的背景
  }
  // 拖动元素进入目标元素
  dragenter = (e, index) => {
    let {contentArr} = this.state
    contentArr = contentArr.filter(i => i.title !== this.current.title)
    contentArr.splice(index, 0, this.current)
    this.setState({
      contentArr
    })
  }
  // 拖动元素离开目标元素
  dragleave = (e, index) => {
  }
  render() {
    const {contentArr} = this.state
    return (
      <div className="other">
        <ul className="other-list clearfix">
          {
            contentArr.map((i, index) =>
              <li className="other-item" key={index} draggable={true} onDragStart={(e) => this.dragstart(e, index)} onDrag={this.drag} onDragEnd={this.dragend} onDragEnter={(e) => this.dragenter(e, index)}>
                <div>
                  <NavLink to={i.link} className="link other-link">
                    <p className="title">{i.title}</p>
                  </NavLink>
                </div>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default Other;
