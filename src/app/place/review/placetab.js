import Link from "next/link";

export default function PlaceTab ({id, title, photo, thumb, tag, script}) {
    return (
        <>
            {/* <Link href='/place/:id'> */}
                <div id="placeTabWrap">
                    <img  id="thumb" src={photo} style={{"width": "60px", "height": "60px"}} />
                    <div className="placeInfo">
                        <div id="title">title</div>
                        <div id="score">★★★★★ 5.0</div>
                    </div>
                    <div className="chevronRight">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            {/* </Link> */}
        </>

    )
}