export const url = "http://127.0.0.1:8000/api/" 

//peticiones Get y Detele 
export const getdelete = async (complemento, metodo)=>{
    const Response = await fetch (url + complemento, {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: metodo? 'DELETE' : 'GET'
    })

    if (Response.ok) {
        //json es una variable 
        const json = Response.json();
        return json 
    }
    return null
}

