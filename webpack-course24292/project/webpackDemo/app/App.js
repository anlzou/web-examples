/*
 * @Date        : 2020-09-30 20:49:26
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-01 15:13:40
 * @FilePath    : \webpack-course24292\project\webpackDemo\app\app.js
 * @Describe    : 
 */
// var config = require("./config.json")
// module.exports = function () {
//     var greet = document.createElement('div');
//     greet.textContent = config[0].text;
//     return greet;
// }

import React, {Component, component} from 'react'
import config from './config.json'
// import styles from 'style-loader!css-loader!./App.css'
import styles from './App.css'


class App extends Component {
    render() {
        return ( 
        <div className={styles.root}> 
            {config[0].text} 
        </div>
        )
    }
}

export default App