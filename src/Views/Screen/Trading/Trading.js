
import React, { useState } from 'react';
import trading from '../../../Assets/css/trading.css'


function Trading  () {
  return (
    <div>
      <div className='container'>
          <div className='first'>
            <div className='chart' ></div>
            <div className='container2'></div>
          </div>
          <div className='second'>
            <div className='info'>
            </div>
            <div className='info2'>
            </div>
          </div>
      </div>
    </div>
  );
};
 export default Trading;