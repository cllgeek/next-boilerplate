import React, { Component }from 'react'
import Layout from '@components/view/Layout'
import { Button } from 'antd';
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Router, { withRouter } from 'next/router'
import { inject, observer } from 'mobx-react';
import config from '../config'

@inject('homeStore')
@observer
class Index extends Component {
  static getInitialProps ({ req }) {
    console.log('------getInitialProps--Index-----')
    return {isServer: !!req}
  }

  constructor (props) {
    console.log('------constructor--Index-----')
    super(props)
  }

  componentDidMount(){

  }

  render() {
    return (
			<Layout>
				<Button type="primary">点击</Button>
			</Layout>
    )
  }
}

export default withRouter(Index)
