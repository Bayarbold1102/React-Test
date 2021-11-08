
import React, { useState , PureComponent} from 'react';
import trading from '../../../Assets/css/trading.css'
import { Layout, Typography, Dropdown, Menu, Input, Button} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import  TradeViewChart  from 'react-crypto-chart';
import { Content } from 'antd/lib/layout/layout';
import Chart from '../../Auth/Components/Chart'

import Bitcoin from '../../Auth/Components/Bitcoin';
import Crypto from 'Views/Auth/Components/Crypto';
import Exchange from '../../Auth/Components/Exchange'
import Data from '../../Auth/data/Data'

function Trading () {

  return (
      <Layout className='container'>
          <Layout className='first'>
            <Content className='header-chart'>
              <Crypto/>
            </Content>
              <Content className='main'>
                  <Content  className='sidebar1'>
                    <Content className='sidebar1-main'>
                      <Content className='titles'>
                        <Content>Price</Content>
                        <Content>Amount</Content>
                        <Content>Total</Content>
                      </Content>
                      <Content className='buys'><Data/></Content>
                      <Content className='sells'></Content>
                    </Content>
                  </Content>
                  <Content className='mainbar'>
                    <Content className='chart'>
                      <Chart/>
                    </Content>
                    <Content className='exchange'>
                      <Content className='exchangeBuy'><Exchange/>
                      <Button className='btn'>Авах</Button></Content>
                      <Content className='exchangeSell'>
                        <Exchange/><Button className='btn'>Зарах</Button>
                      </Content>
                    </Content>
                    <Content className='history'></Content>
                  </Content>
                  <Content className='sidebar2'></Content>
              </Content>
          </Layout>
      </Layout>
  );
};
 export default Trading;