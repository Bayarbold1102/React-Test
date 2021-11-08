import { Content } from "antd/lib/layout/layout";
import React from "react";
import data from '../../../Assets/css/data.css'

function Data(){
    const data=[{id:1, amount:1000, price:1.7, total: 1700},{id:2, amount:1000, price:1.7, total: 1700},{id:3, amount:1000, price:1.7, total: 1700},{id:4, amount:1000, price:1.7, total: 1700},{id:5, amount:1000, price:1.7, total: 1700},{id:6, amount:1000, price:1.7, total: 1700}]

    return(
        <Content>
            {
                data.map((data)=>(<Content className='data'>
                    <Content>{data.price}</Content>
                    <Content>{data.amount}</Content><Content>{data.total}</Content>
                    </Content>
                ))
            }
        </Content>
    )
}
export default Data;