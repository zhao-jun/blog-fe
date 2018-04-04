import React from  'react';
import './about.less';
import AboutBg from '../../assets/images/AboutBgLarge.png'

const About = () => (
    <div className="about">
        <img className="aboutBg" src={AboutBg} alt="aboutBg"></img>
        <div className="aboutWrap">
            <h2>关于</h2>
            <div className="aboutContent">
                <h3>网站内容</h3>
                <ul>
                    <li><span className="describe">更新技术文章、教程和日志</span></li>
                    <li><span className="describe">尝试新技术改版</span></li>
                </ul>
                <h3>联系方式</h3>
                <ul>
                    <li className="item"><span className="github"/>zhao-jun</li>
                    <li className="item"><span className="mail"/>j_z@foxmail.com</li>
                </ul>
                <h3>网站架构</h3>
                <ul>
                    <li><span className="describe">前端：webpack3 + react16 + mobx + react-router4</span></li>
                    <li><span className="describe">后端：spingboot + mybatis</span></li>
                </ul>
            </div>
        </div>
    </div>
);

export default About;
