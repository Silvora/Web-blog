export function setToken(key:string,val:string|boolean){
    localStorage.setItem(key,String(val))
}

export function getToken(key:string):any{
    return localStorage.getItem(key)
}