
import React, { useState } from 'react';
import trading from '../../../Assets/css/trading.css'
import { Layout} from 'antd';
import  TradeViewChart  from 'react-crypto-chart';
import { Content } from 'antd/lib/layout/layout';


function Trading  () {
  return (
    <Layout>
      <Layout className='container'>
          <Layout className='first'>
              <Content className='chart'></Content>
            <Content className='info3'>
              <Content className='info4'></Content>
            </Content>
          </Layout>
          <Layout className='second'>
            <Content className='info'>
            </Content>
            <Content className='info2'></Content>
          </Layout>
      </Layout>
    </Layout>
  );
};
 export default Trading;