import { API } from "../Config";

type course = {
    title: string,
    credit_hour:string,
    description:string,
}

export const listCourse = () => {
    return fetch(`${API}/courses`,{
        method:'GET',
    })
    .then(res => {return res.json()})
    .catch(err => console.log(err))
}

export const createCourse = (data:course) => {
    return fetch(`${API}/course`,{
        method:'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(response => { return response.json() })
        .catch(err => console.log(err))
}

export const updateCourse = (data:course, id:number) =>{
    return fetch(`${API}/${id}`,{
        method:"PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(response => { return response.json() })
        .catch(err => console.log(err))
}


export const removeCourse = (id:number) =>{
    return fetch(`${API}/${id}`,{
        method:"DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
        .then(response => { return response.json() })
        .catch(err => console.log(err))
}

