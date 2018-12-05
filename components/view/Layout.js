/*
 * @file: 页面布局组件
 */

import React, { Component }from 'react'
import Header from './Header'
import Footer from './Footer'

import '../../asserts/css/styles.less'

class Layout extends Component {
  render () {
    let { children } = this.props;
    return (
      <div>
        <Header/>
        {children}
        <Footer/>
      </div>
    )
  }
}

export default Layout;
