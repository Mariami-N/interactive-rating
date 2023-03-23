

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
<div className='main' style ={{
        width:"412px",
        height: "416px",
        backgroundColor:" #181E27 ",
        borderRadius:"30px",
        }}>
          <div className='star'>
              <img style={{
                  width: "17px",
                  height: "17px",
              }}
              src={image} alt=""/>
          </div>
          <div style={{
            display: "flex",
            flexDirection:"column",
            width:"350px",
            height:"122px",
            marginTop:"10px",
            marginLeft: "32px",
          }}>
          <h1 style={{
            color:"white",
            fontFamily: 'Overpass',
            fonTweight: "700",
            fontSize: "28px",
            lineHeight: "35px",
            marginBottom:"1px"
          }}
          >How did we do?</h1>
          <p style={{
            fontFamily: 'Overpass',
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "24px",
            color: "#969FAD",
            marginBottom:"30px",
          }}
          >Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          </div>
          <div style={{
            display:"flex",
            justifyContent:"space-around",
            alignContent:"space-around",
            gap:"20px",
            width:"341px",
            marginLeft:"32px",
            marginTop:"40px",
          }}>
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
