import { useState } from 'react';

function Counter(){
    const [count,setCount]=useState(0)

    return(
        <div style={{ textAlign: 'center',marginTop: '20px',fontFamily:'sans-serif'}}>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(0)} style={{margin: '0 5px'}}>Reset</button>
        <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    )
}

export default Counter;