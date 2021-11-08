import React,{useState}from "react";
import { Button, Form, Item,List, Input, InputNumber } from 'antd';
import { Content } from "antd/lib/layout/layout";
import {exchange} from '../../../Assets/css/exchange.css'

function Exchange(){
    return(
        <Content>
             <Input className='input1'  type='number' placeholder='Үнэ'/>
            <Input className='input2' type='number' placeholder='Ширхэг'/>
            <Content className='total-btn'>
            <Content className='uldegdel'>Боломжит үлдэгдэл : </Content>
                <Button className='tbtn' type="default" htmlType="submit">25%</Button>
                <Button className='tbtn' type="default" htmlType="submit">50%</Button>
                <Button className='tbtn' type="default" htmlType="submit">75%</Button>
                <Button className='tbtn' type="default" htmlType="submit">100%</Button>
                
            </Content>
            <Content className='total'>Нийт :</Content>
        </Content>
    )
}
export default Exchange;