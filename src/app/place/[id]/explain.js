

export default function Explain({intro, hashTag}) {

    return (
        <>
            <div id="explain">
                <h1 class="quote quote-left"><i class="fa-solid fa-quote-left"></i></h1>
                <div id="intro">{intro}</div>
                <h1 class="quote quote-right"><i class="fa-solid fa-quote-right"></i></h1>
            </div>
            <p class="tag">{hashTag}</p>
        </>
    )
}