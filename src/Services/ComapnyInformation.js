// const API = 'AIzaSyA2MRdhcQ-6ex98ZO6Bn1AWmTFNoEjrwII'
// const url = `https://project-defense-90c21-default-rtdb.firebaseio.com/-MW_zNBHtntVipat1YJs${API}`
const detail = 'https://project-defense-90c21-default-rtdb.firebaseio.com/-MXY-daeAIpWruECUUj9.js'
const url = 'https://project-defense-90c21-default-rtdb.firebaseio.com/Games.json'
const APIkey = 'AIzaSyA2MRdhcQ-6ex98ZO6Bn1AWmTFNoEjrwII'
const signeInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIkey}`

export const getAllInformation = () => {

    return fetch(url, { method: 'GET', headers: { 'Content-type': 'text/json' } })
        .then(res => res.json())
}

export const getOne = () => {


    return fetch(url, { method: 'GET', headers: { 'Content-type': 'text/json' } })
        .then(res => res.json())
        

}




// export const signeIn = () => {
//     return fetch(signeInUrl, {method: 'POST'})
//     .then(res => res.json())
//     .catch(error => console.error(`${error}`))
// }
