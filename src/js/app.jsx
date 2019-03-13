import React from 'react';
import _ from 'lodash';

import './App.scss';


export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='data'>
                Hello and Welcome, React-Redux-Sass Demo kit is successfully build and your kit is ready to use
            </div>
        )
    }
}