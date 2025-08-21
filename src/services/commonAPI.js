import axios from "axios"

const commonAPI = (httpMethod,url,reqBody)=>{
    const reqConfig= {
        method : httpMethod,
        url,
        data : reqBody
    }
    return await axios(reqConfig).then(res=>{
        return res
    })
}
