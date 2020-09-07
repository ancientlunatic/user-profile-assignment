export class FetchRequest 
{
    public static async Getrequest(url : string ) 
    {
        let response = await fetch(url);
        if(response.status!=200)
        {
            return null;
        }
        let result = await response.json();
        return result;
    }
    public static async postRequest<T>( url :  string  ,   requestBody:T )
    {
        let response = await fetch(url , 
            {
                method :"POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(requestBody)
            
            });
        if(response.status!=200)
        {
            return null;
        }
        let result = await response.json();
        return result;
    }
    public static async PostFormRequest( url :  string  ,   requestBody:FormData)
    {
        let response = await fetch(url , 
            {
                body: requestBody,
                method: "post"
            
             });
        if(response.status!=200)
        {
            return null;
        }
        return true;
    }

}