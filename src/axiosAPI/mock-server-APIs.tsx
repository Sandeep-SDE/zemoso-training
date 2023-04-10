import axios from "axios";

//const URL = "https://dff0a85c-762e-450b-a8c1-f54e52ff6df1.mock.pstmn.io";
const URL = "http://localhost:3000"

export async function getServerData(){
    const resData = await axios.get(`${URL}/user`).then((res:any)=>{
        return res.data;
    }).catch((err:any)=>{
        return err.message;
    });
    return resData;
}


// export async function postCall(){
//     const resData = await axios.post(`${URL}/post-test`).then((res:any)=>{
//         return res.data;
//     }).catch((err:any)=>{
//         return err.message;
//     });
//     return resData;
// }

// export async function putCall(){
//     const resData = await axios.put(`${URL}/update`).then((res:any)=>{
//         return res.data;
//     }).catch((err:any)=>{
//         return err.message;
//     });
//     return resData;
// }

// export async function deleteCall(){
//     const resData = await axios.delete(`${URL}/delete`).then((res:any)=>{
//         return res.data;
//     }).catch((err:any)=>{
//         return err.message;
//     });
//     return resData;
// }