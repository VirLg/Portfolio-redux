import axios from "axios";

const instance = axios.create({baseURL:"https://api.escuelajs.co/api/v1/"})

export const signUp = async(body)=>{
console.log(body)
     const data = await instance.post('users',body)
     return data
}