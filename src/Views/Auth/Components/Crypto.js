import { Content } from "antd/lib/layout/layout";
import React, {useState} from "react";
import {Select, Radio} from 'antd';

import '../../../Assets/css/eth.css';
import Bitcoin from "./Bitcoin";


const Eth = () => {

    const [button, setButton] = useState({btn1: true, btn2: true, btn3: true})

    return(
        <Content className='container'>
            <Content value='btc' onClick={()=>setButton({...button, btn1: !button.btn1})} className={button.btn1 ? 'crypto1' : 'crypto1-1'}>
                <Bitcoin/>
            </Content>
            <Content value='eth' onClick={()=>setButton({...button, btn2: !button.btn2})} className={button.btn2 ? 'crypto2' : 'crypto2-2'}></Content>
            <Content value='shiba' onClick={()=>setButton({...button, btn3: !button.btn3})} className={button.btn3 ? 'crypto3' : 'crypto3-3'}></Content>
        </Content>
        
    )
}
export default Eth;