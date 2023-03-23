import image from "../images/photo.png";
export default function Page (){
    return(
    <>
        <div className="secondbox">
                <img  className="image2" src={image} alt=""/>
                <div className="fourout">You selected 4 out of 5</div>
                <h1 className="thanks">Thank you!</h1>
                <p className="time">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
    </>
    )
}
