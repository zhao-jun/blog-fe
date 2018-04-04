import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './blog.less';

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: '',
      contentArr: [
        {
          title: 'Canvas1',
          time: '2018-04-04',
          code: '12256543234567543212345',
          label: ['编程', '学习']
        },
        {
          title: 'Canvas1',
          time: '2018-04-04',
          code: '12256543234567543212345',
          label: ['编程', '学习']
        },
        {
          title: 'Canvas1',
          time: '2018-04-04',
          code: '12256543234567543212345',
          label: ['编程', '学习']
        }
      ]
    }
  }

  componentDidMount() {
  }

  render() {
    const { contentArr } = this.state
    return (
      <div className="blog">
        <ul className="blog-list">
          {
            contentArr.map((i, index) =>
              <li className="blog-item" key={index} draggable={true} onDragStart={(e) => this.dragstart(e, index)} onDrag={this.drag} onDragEnd={this.dragend} onDragEnter={(e) => this.dragenter(e, index)}>
                <NavLink to={`/${i.code}`} className="link">
                  <p className="title">{i.title}</p>
                </NavLink>
                <p className="time">发表于{i.time}</p>
                <ul className="label">
                  {
                    i.label && i.label.map(item =>
                      <li key={item}>{item}</li>
                    )
                  }
                </ul>
              </li>
            )
          }
        </ul>
        <div className="blog-sidebar">
          <p>文章归档</p>
          <ul>
          </ul>
          <p>文章分类</p>
          <ul>

          </ul>
        </div>
      </div>
    )
  }
}

export default Blog;
