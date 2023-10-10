export default function Comments ({id, title, photo, thumb, tag, script}) {
    let newTag = tag.split(",").slice(0, 3)

    return (
        <div class="comments" style={{"width": "170px", "height": "270px", "flexShrink":"0"}}>
            <img src={photo} class="comments-img-top" alt="..."/>
            <div class="comments-body">
                <p class="profileImg"></p>
                <p class="user"></p>
                <p class="date"></p>
                <p class="recommendedCnt"></p>
                <p class="recommendedIcon"></p>
                <p class="contents"></p>
            </div>
        </div>
    )
}