import { FetchRequest } from "../Common Method/HttpRequest";


export class Credentials
{
    public UserName : string
    public password : string
    constructor(username:string,  pass :string)
    {
        this.UserName = username;
        this.password= pass;
    }
}

export class Validate
{
   
    public static async login(username :string , pass :string) 
    {
        var url = "https://localhost:44324/api/OAuth/login";
        var data = new Credentials(username , pass);
        var result = await FetchRequest.postRequest<Credentials>(url , data);
        if(result!=null)
        {
             if(result.statusCode == 200)
             {
                
                 var date =new  Date();
                 date.setMinutes(date.getMinutes() + 30);
                 var expire = date.getTime();
                 const item =  {
                     id: result.result.id,
                    name : result.result.firstName +" "+ result.result.lastName ,
                    username : result.result.userName,
                    exp : expire
                }
                localStorage.setItem("user" ,  JSON.stringify(item));
                return true;
             }
             return false;
         }     
         return false;  

    }
   
}
