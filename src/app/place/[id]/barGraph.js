

export default function BarGraph ({comment}) {

    const length = comment.length;
    let lateArray = [];

    for(let i = 5; i > 0; i--) {
        let cnt = comment.filter((item) => item.star == i).length
        cnt = (cnt / length * 100).toFixed(1);

        lateArray.push([i, cnt]);
    } 

    // console.log(lateArray)
    return (

        <>
            {
                lateArray.map((item) => (
                    <div className="graph">
                        <p>{item[0]}점</p>
                        <div className="progress" role="progressbar" aria-valuenow={item[1]} aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{"width": `${item[1]}%`}}></div>
                        </div>
                        <p>{item[1]}%</p>
                    </div>
                ))
            }
            
        </>
    )
}