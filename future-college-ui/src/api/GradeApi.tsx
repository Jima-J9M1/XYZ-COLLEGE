import { API } from "../Config";

type grade = {
    studentId:number,
    courseId:number
}

export const createGrade = (data:grade) => {
    return fetch(`${API}/grade`,{
        method:'POST',
        headers: {
            Accept: "application/json",
        },
        body:JSON.stringify(data)
    })
        .then(response => { return response.json() })
        .catch(err => console.log(err))
}

export const updateGrade = (data:grade, sid:number, cid:number) => {
    return fetch(`${API}/student/${sid}/course/${cid}`,{
        method:'PUT',
        headers: {
            Accept: "application/json",
        },
        body:JSON.stringify(data)
    })
        .then(response => { return response.json() })
        .catch(err => console.log(err))
}

export const removeGrade = (sid:number, cid:number) => {
    return fetch(`${API}/student/${sid}/course/${cid}`,{
        method:'DELETE',
        headers: {
            Accept: "application/json",
        },
    })
        .then(response => { return response.json() })
        .catch(err => console.log(err))
}

export const listGrade = () => {
    return fetch(`${API}`, {
        method:"GET"
    })
    .then(res => {return res.json()})
    .catch(err => console.log(err))
}

