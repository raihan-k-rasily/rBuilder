import { BASEURL } from "./baseURL"
import commonAPI from "./commonAPI"

// addResumeAPI - POST - called by Steps component

export const addResumeAPI = async (resume)=>{
    return await commonAPI("POST",`${BASEURL}/all-resume`,resume)
}

// editResumeAPI - PUT

// addHistory - POST - called by preview component when finish button clicked
export const addDownloadHistoryAPI = async (resume)=>{
    return await commonAPI("POST",`${BASEURL}/history`,resume)
}

// getHistory - GET : called by history component when its page open in browser

export const getHistoryAPI = async () =>{
    return await commonAPI("GET",`${BASEURL}/history`,{})
}

// deleteHistory -DELETE - called by history when delete btn is clicked

export const deleteHistory = async (id) =>{
    return await commonAPI("DELETE",`${BASEURL}/history/${id}`,{})
}