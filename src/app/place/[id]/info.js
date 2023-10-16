

export default function Info({intro, hashTag}) {

    return (
        <>
            <div id="explain">
                <h1 className="quote quote-left"><i className="fa-solid fa-quote-left"></i></h1>
                <div id="intro">{intro}</div>
                <h1 className="quote quote-right"><i className="fa-solid fa-quote-right"></i></h1>
            </div>
            <p className="tag">{hashTag}</p>
        </>
    )
}