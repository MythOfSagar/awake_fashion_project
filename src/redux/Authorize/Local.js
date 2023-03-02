const getLocalData=(key)=>{
    try{
        let data=localStorage.getItem(key)
        data=JSON.parse(data)
        return data
    } catch(err){
        return null
    }
}

const saveLocalData=(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
}

export {getLocalData, saveLocalData}