import React from  'react';
import {NavLink } from 'react-router-dom';
import './other.less';

const Other = () => (
    <ul className="other">
        <li className="otherItem">
            <NavLink to="/canvasBg" className="link otherLink">
                <p className="title">Canvas</p>
            </NavLink>
        </li>
    </ul>
);

export default Other;
