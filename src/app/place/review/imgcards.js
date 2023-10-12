export default function ImgCards ({id, title, photo, thumb, tag, script}) {
    return (
        <div style={{"width": "120px", "height": "120px", "flexShrink":"0", "border":"1px solid black"}}>
            <img src={photo} alt="img"/>
        </div>
    )
}