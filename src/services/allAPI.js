import { BASEURL } from "./baseURL"
import commonAPI from "./commonAPI"

// addResumeAPI - POST - called by Steps component

export const addResumeAPI = async (resume)=>{
    return await commonAPI("POST",`${BASEURL}/all-resume`,resume)
}

// editResumeAPI - PUT - called by edit component when update button clicked

export const editResumeAPI = async (id,resume)=>{
    return await commonAPI("PUT",`${BASEURL}/all-resume/${id}`,resume)
}

// addHistory - POST - called by preview component when finish button clicked
export const addDownloadHistoryAPI = async (resume)=>{
    return await commonAPI("POST",`${BASEURL}/history`,resume)
}

// getHistory - GET : called by history component when its page open in browser

export const getHistoryAPI = async () =>{
    return await commonAPI("GET",`${BASEURL}/history`,{})
}

// deleteHistory -DELETE - called by history when delete btn is clicked

export const deleteHistoryAPI = async (id) =>{
    return await commonAPI("DELETE",`${BASEURL}/history/${id}`,{})
}

// getEditResumeAPI - GET - called by edit component whe its open in browser (useEffect)
export const getEditResumeAPI = async(id)=>{
    return await commonAPI("GET",`${BASEURL}/all-resume/${id}`,{})
}