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


export function GetMarkdownItem(url:string){
    return http.request({
        url:"/markdownItem/"+url,
        method:"Get",
    })
}


export function GetSearchList(params:any){
    return http.request({
        url:"/search",
        method:"Get",
        params
    })
}

export function GetNotice(){
    return http.request({
        url:"/notice",
        method:"Get",
    })
}

export function AddRead(){
    return http.request({
        url:"/read",
        method:"Post",
    })
}



export function GetRead(){
    return http.request({
        url:"/read",
        method:"Get",
    })
}

export function GetTotal(){
    return http.request({
        url:"/total",
        method:"Get",
    })
}
