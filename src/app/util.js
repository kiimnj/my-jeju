// 지금 시간 입력
function dateTimeFormmat(dateTime) {
    let date = 0;
    if(dateTime.getDate() < 10) {
        date = "0" + dateTime.getDate();
    } else {
        date = dateTime.getDate();
    }

    let month = 0;
    if(dateTime.getMonth() < 10) {
        month = "0" + dateTime.getMonth();
    } else {
        month = dateTime.getMonth();
    }

    let year = dateTime.getFullYear();

    return `${year}.${month}.${date}`
}

// 현재시간!!!
const now = dateTimeFormmat(new Date());


// 데이터 불러오기
export async function getData(url) {
    const res = await fetch (`${url}`);
        
    if(!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`)
    }

    return await res.json();
}

// 좋아요 or 방문이 처음일 때 데이터 생성
export async function addLikeVisit(url, userid, liked, visited, postid) {
    const res = await fetch (url, {
        method: 'POST',
        // headers: {'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem("user")).token},
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
            userid: userid,
            postid: postid,
            liked: liked,
            visited: visited,
            dateTime: now
        })
    })

    if(!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`)
    } else{
        alert("좋아요!")
    }

    return await res.json();
}

// 좋아요 or 방문이 처음이 아닐 때 데이터 변환
export async function putLikeVisit(url, id, userid, liked, visited, postid) {
    
    const res = await fetch (url, {
        method: 'PUT',
        // headers: {'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem("user")).token},
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
            id: id,
            userid: userid,
            postid: postid,
            liked: liked,
            visited: visited,
            dateTime: now
        })
    })

    if(!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`)
    } else{
        alert("좋아요!")
    }

    return await res.json();
}

// 리뷰에 댓글
export async function addComment(url, userid, reviewid, comment) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
            userid: userid,
            reviewid: reviewid,
            comment: comment,
            dateTime: now
        })
    })

    if(!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`)
    }

    return res.json();
}

// export async function addFormData(url, formData) {
//     const res = await fetch (url, {
//         method: 'POST',
//         headers: {'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem("user")).token},
//         body: formData
//     })

//     if(!res.ok) {
//         throw new Error(`${res.status} ${res.statusText}`)
//     }

//     return await res.json();
// }

