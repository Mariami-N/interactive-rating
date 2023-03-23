

import './App.css';
import { useState } from 'react';
import image from "./images/PathStar.png";
import Page from './components/Page';

function App() {
  const [color, setColor] = useState ("#262E38")
  const [textColor, setTextColor] =useState ("#7C8798")
  const [clicked, setClicked] = useState (false)
  const [showpage, setShowPage] =useState (false)
  
  function changeColor() {
    if(clicked){
      setColor ("#7C8798")
      setTextColor("white")
    }else{
      setColor ("#262E38")
      setTextColor("#7C8798")
    }
    setClicked(!clicked)
  }

    const  handleClick = () => {
            setShowPage(true);
  }

  
  return (
    <>
      {showpage ? (
              <Page/>
            ) : (
<div className='main'>
          <div className='star'>
              <img className='image1'
              src={image} alt=""/>
          </div>
          <div className='text' >
          <h1 className='howdid'
          >How did we do?</h1>
          <p className='please'
          >Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          </div>
          <div className='boxes'>
            <div className='box'
            >1</div>
            <div className='box'
            >2</div>
            <div className='box'
            >3</div>
            <div className='box' 
            style={{
              backgroundColor:color, color: textColor,
            }} onClick={()=> {changeColor()}}
            >4</div>
            <div className='box' 
            >5</div>
          </div>
          <div>
            <button onClick={handleClick} className="submit" >SUBMIT</button>
          </div>
      </div>
            )}
    </>
  );
}

export default App;
