import http from "./http";


export function GetTag(){
    return http.request({
        url:"/tag",
        method:"Get",
    })
}


export function GetClass(){
    return http.request({
        url:"/class",
        method:"Get",
    })
}


export function GetMarkdown(){
    return http.request({
        url:"/markdown",
        method:"Get",
    })
}
