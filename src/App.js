import './App.css';
import { createContext, useReducer } from 'react';
import ComponentOne from './ComponentOne/ComponentOne';

// গ্লোবাল ভাবে কনটেক্স ক্রিয়েট করে ডিস্পেচ পাঠানো হয়েছে 

export const counterContext = createContext()

function App() {

  const initialState = 0;
  const reducer = (state,action)=>{
    switch(action){


      case 'incrise': 
        return state + 1;

      case 'decrise':
        return state - 1;

        default:return state ;

    }
  }
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div className="App">
        <h4>{count}</h4>
        <counterContext.Provider value={{dispatch:dispatch}}>
            <ComponentOne/>
          </counterContext.Provider>
    </div>
  );
}

export default App;
