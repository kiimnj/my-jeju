export default function PlaceTab ({id, title, photo, thumb, tag, script}) {
    let newTag = tag.split(",").slice(0, 3)
    let hashTag = newTag.map(tag => "#" + tag.trim() + " ");

    return (
        <div class="placeTab" style={{"width": "170px", "height": "270px", "flexShrink":"0"}}>
            <img src={photo} class="placeTab-img-top" alt="..."/>
            <div class="placeTab-body">
                <p class="title">{title}</p>
                <p class="score">★★★☆☆ 3.5</p>
                <p class="visited"><img src=""></img></p>
                <p class="liked"><img src=""></img></p>
            </div>
        </div>
    )
}