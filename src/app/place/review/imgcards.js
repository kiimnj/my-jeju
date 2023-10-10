export default function ImgCard ({id, title, photo, thumb, tag, script}) {
    let newTag = tag.split(",").slice(0, 3)

    return (
        <div class="imgCards" style={{"width": "170px", "height": "270px", "flexShrink":"0"}}>
            <img src={photo} class="imgCards-img-top" alt="..."/>
            <div class="imgCards-body">
                <p class="imgCard"><img src=""></img></p>
            </div>
        </div>
    )
}