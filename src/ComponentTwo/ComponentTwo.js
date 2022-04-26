import React, { useContext } from 'react';
import {counterContext} from '../App'

const ComponentTwo = () => {
    const countContext = useContext(counterContext)
    return (
        <div>
            <button onClick={()=>countContext.dispatch('incrise')}>incrise</button>
            <button onClick={()=>countContext.dispatch('decrise')}>decrise</button>
            
        </div>
    );
};

export default ComponentTwo;