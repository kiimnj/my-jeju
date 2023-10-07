export async function getData(url) {
    const res = await fetch (`${url}`);
        
    if(!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`)
    }

    return await res.json();
}

export async function addData(url, formData) {
    const res = await fetch (url, {
        method: 'POST',
        headers: {'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem("user")).token},
        body: formData
    })

    if(!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`)
    }

    return await res.json();
}

