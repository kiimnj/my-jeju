export default function PlaceTab ({id, title, photo, thumb, tag, script}) {
    return (
        <div>
            <div style={{"width": "60px", "height": "60px", "flexShrink":"0", "border":"1px solid black"}}>
                <img src={photo} alt="..." style={{"width": "60px", "height": "60px"}} />
            </div>            
                <div>
                    <div class="title">title</div>
                    <div class="score">★★★★★ 5.0</div>
                </div>
                <span class="visited"><img src="" alt="icon" /></span>
                <span class="liked"><img src="" alt="icon" /></span>
        </div>
    )
}