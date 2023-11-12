import { API } from "../Config";

type student = {
    name:string;
    email:string,
    phone:string,
    academic_record:number,
}
export const listStudent = () => {

    return fetch(`${API}/students`,{
        method:"GET"
    }).
    then(res => {return res.json()})
    .catch(err => console.log(err))
}

export const createStudent = (data:student) => {
     return fetch(`${API}/student`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
     })
     .then(response => {return response.json() })
    .catch(err => console.log(err))
}

export const updateStudent = (data:student, id:number) => {
    return fetch(`${API}/${id}`,{
       method:"PUT",
       headers:{
           Accept: "application/json",
           "Content-Type":"application/json"
       },
       body:JSON.stringify(data)
    })
    .then(response => {return response.json() })
    .catch(err => console.log(err))
}

export const removeStudent = ( id:number) => {
    return fetch(`${API}/${id}`,{
       method:"delete",
    })
    .then(response => {return response.json() })
    .catch(err => console.log(err))
}

