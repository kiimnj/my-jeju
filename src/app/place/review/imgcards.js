import { useState } from "react";

export default function ImgCards ({id, title, photo, thumb, tag, script}) {
    const [imgFile, setImgFile] = useState("");

    return (
        <div>
            {/* <img src={photo} alt="img"/> */}
            <div id='imageSlide'>
                <img
                className='images'
                src={imgFile}
                alt=""
                style={{'width':'120px'}}
                />
                <img
                className='images'
                src={imgFile}
                alt=""
                style={{'width':'120px'}}
                />
                <img
                className='images'
                src={imgFile}
                alt=""
                style={{'width':'120px'}}
                /> 
            </div>
        </div>
    )
}