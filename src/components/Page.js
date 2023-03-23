import image from "../images/photo.png";
export default function Page (){
    return(
    <>
        <div style ={{
            width:"412px",
            height: "416px",
            backgroundColor:" #181E27 ",
            borderRadius:"30px",
            }}>
                <img  className="image" src={image} alt=""/>
                <button className="fourout">You selected 4 out of 5</button>
                <h1 className="thanks">Thank you!</h1>
                <p className="time">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
    </>
    )
}
