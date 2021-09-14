//import { render } from 'react-dom'
import React from 'react'
import Time from 'react-time'

 const Clock = ()=> {
    
    let now = new Date();
    return (
        <div className='clock'>
            <p>today is<Time value={now} format="YYYY/MM/DD HH:mm"/></p>
        </div>
      );
    
}
 
export default Clock;
