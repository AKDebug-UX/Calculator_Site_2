import React from 'react'
import App1 from './Components/MainA/App1'
import App2 from './Components/MainA/App2'
import App3 from './Components/MainA/App3'
import Promotions from "./Components/promotions/index";
import Navbar from './Components/Navbar/Nav';
import Footer from './Components/Footer/index';

import "./App.css"


const App = () => {
  return (
    <div className='heros'>
     <Navbar />
      <div className='hero'>
        
        <Promotions />
            <div className='card-container SubHeading'>
                <div className='card'>
                    <h1 className='SubHeading'>Calculator</h1>
                    <br/><br/>
                    <App1 />
                </div>
                <div className='card'>
                <h1 className='SubHeading'>Age</h1>
                <br/><br/>
                    <App2 />
                </div>
                <div className='card'>
                <h1 className='SubHeading'>Speed</h1>
                <br/><br/>
                    <App3 />
                </div>
            </div>
        </div>
        <Footer />
     </div>
  )
}

export default App