import { API } from "../Config";

export const createEnroll = (studentId:number, courseId:number) => {
    return fetch(`${API}/enroll/student/${studentId}/course/${courseId}`,{
        method:"POST",
        headers: {
            Accept: "application/json",
        },
    })
        .then(response => { return response.json() })
        .catch(err => console.log(err))
}

export const getEnrolledCoursesByStudent = (studentId:number) => {
    return fetch(`${API}/student/${studentId}/courses`,{
        method:"GET",
        
    })
    .then(res => {return res.json()})
    .catch(err => console.log(err))

}

export const getEnrolledStudentsWithCourse = () => {
    return fetch(`${API}/course/:courseId/course`,{
        method:"GET",
        
    })
    .then(res => {return res.json()})
    .catch(err => console.log(err))
    
}

export const getEnrolles = () => {
    return fetch(`${API}/enrolls`,{
        method:"GET",
        
    })
    .then(res => {return res.json()})
    .catch(err => console.log(err))
    
}


export const removeEnroll = () => {
    return fetch(`${API}/student/:studentId/course/:courseId`,{
        method:"GET",
    })
    .then(res => {return res.json()})
    .catch(err => console.log(err))
    
}