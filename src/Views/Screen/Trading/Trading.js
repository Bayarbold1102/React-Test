
import React, { useState } from 'react';
import trading from '../../../Assets/css/trading.css'
import { Layout, Typography} from 'antd';
import  TradeViewChart  from 'react-crypto-chart';
import { Content } from 'antd/lib/layout/layout';

const {Text} = Typography;

function Trading  () {
  return (
      <Layout className='container'>
          <Layout className='first'>
            <Content className='header-chart'>
              <Text className='header-chart-text' type='success'>Blooop</Text>
            </Content>
              <Content className='chart'></Content>
            <Content className='info3'>
              <Content className='info4'></Content>
            </Content>
          </Layout>
          <Layout className='presecond'>
            <Layout className='second'>
              <Content className='info'></Content>
              <Content className='info2'></Content>
            </Layout>
            <Content className='info5'></Content>
          </Layout>
      </Layout>
  );
};
 export default Trading;