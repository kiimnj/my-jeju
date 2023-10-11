

export default function Card ({id, title, photo, thumb, tag, script}) {
    let newTag = tag.split(",").slice(0, 3)
    let hashTag = newTag.map(tag => "#" + tag.trim() + " ");
    // console.log(hashTag)

    if(title.includes("<")) {
        title = title.substring(0, title.indexOf("<"))
    } else if (title.includes("[")) {
        title = title.substring(0, title.indexOf("]") + 1)
    }


    return (
        
        <div className="card" style={{"width": "170px", "height": "270px", "flexShrink":"0"}}>
            <img src={photo} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="title">{title}</p>
                <p className="star">★★★☆☆ 3.5</p>
                <p className="hashtag">{hashTag}</p>
            </div>
        </div>
    )

}