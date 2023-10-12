export default function PlaceTab ({id, title, photo, thumb, tag, script}) {
    return (
        <div id="wrapper">
            <img className="items" id="thumb" src={photo} alt="..." style={{"width": "60px", "height": "60px", "border":"1px solid black"}} />
            <div className="items">
                <div id="title">title</div>
                <div id="score">★★★★★ 5.0</div>
            </div>
            {/* <div className="items" id="visited"><i class="icon fa-solid fa-circle-check"></i></div>
            <div className="items" id="liked"><i class="icon fa-solid fa-heart"></i></div> */}
            <div><i class="fa-solid fa-chevron-right" style={{color:'#d9d9d9'}}></i></div>
        </div>
    )
}