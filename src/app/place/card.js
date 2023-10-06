

export default function Card ({id, title, photo, thumb, tag, script}) {
    let newTag = tag.split(",").slice(0, 3)
    let hashTag = newTag.map(tag => "#" + tag.trim() + " ");
    // console.log(hashTag)



    return (
        
        <div class="card" style={{"width": "170px", "height": "270px", "flexShrink":"0"}}>
            <img src={photo} class="card-img-top" alt="..."/>
            <div class="card-body">
                <p class="title">{title}</p>
                <p class="star">★★★☆☆ 3.5</p>
                <p class="hashtag">{hashTag}</p>
            </div>
        </div>
    )

}