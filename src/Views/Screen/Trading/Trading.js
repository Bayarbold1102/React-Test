
import React, { useState , PureComponent} from 'react';
import trading from '../../../Assets/css/trading.css'
import { Layout, Typography, Dropdown, Menu} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import  TradeViewChart  from 'react-crypto-chart';
import { Content } from 'antd/lib/layout/layout';
import Chart from '../../Auth/Components/Chart'

import Bitcoin from '../../Auth/Components/Bitcoin';
import Crypto from 'Views/Auth/Components/Crypto';
function Trading  () {

  return (
      <Layout className='container'>
          <Layout className='first'>
            <Content className='header-chart'>
             
              <Crypto/>
            </Content>
              <Content className='chart'>
            <Chart/>
              </Content>
            <Content className='info3'>
              <Content className='info4'>
              </Content>
            </Content>
          </Layout>
      </Layout>
  );
};
 export default Trading;