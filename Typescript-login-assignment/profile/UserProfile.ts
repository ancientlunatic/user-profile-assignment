import { FetchRequest } from "../Common Method/HttpRequest";
import { User } from "../Models/Usermodel";
import { SignUp } from "../signup/UserData";

export class profile
{
    public static  GetUserId() : number
    {
        var user = localStorage["user"];
        if(user!=null && user!=undefined  )
        {
             var item = JSON.parse(user);
             return parseInt(item.id);
        }
        return -1;
    }
    public  static async GetUserData()
    {   
        var userId = this.GetUserId();
        var url = "https://localhost:44324/api/OAuth/user?id=" + encodeURI(userId.toString());
        var resposnse = await FetchRequest.Getrequest(url);
        console.log(resposnse)
   
        if(resposnse!=null)
        {
            return resposnse;
        }
        return null;
    }
    public static MapData(user :any)
    {
        if(user.profileImagePath!="" && user.profileImagePath!= null)
        (document.getElementById("profileImage") as HTMLImageElement).src = "https://localhost:44324/"+ user.profileImagePath;
        (document.getElementById("name") as HTMLHeadingElement).innerText = user.firstName + " " + user.lastName; 
        (document.getElementById("role") as HTMLParagraphElement).innerText = user.role;
        (document.getElementById("Email") as HTMLParagraphElement).innerText = user.userName;
        (document.getElementById("phonenum") as HTMLButtonElement).innerText = user.phoneNumber;

    }
}



export class UpdateUser
{
    
    public static BindData (user :User) 
    {
        (document.getElementById("Fname") as HTMLInputElement).value = user.FirstName;
        (document.getElementById("Lname") as HTMLInputElement).value = user.LastName ;
        (document.getElementById("profile") as HTMLInputElement).value = "";
         (document.getElementById("phone") as HTMLInputElement).value= user.PhoneNumber;
       (document.getElementById("Username") as HTMLInputElement).value=user.UserName ;
        (document.getElementById("password") as HTMLInputElement).value =user.password ;
    }
    public  static async upload()
    {
        let  url="https://localhost:44324/api/OAuth/update";
        let data =  SignUp.Getfields();
        let response = await FetchRequest.PostFormRequest(url , data);
        if(response!=null)
        {
            return true;
        }
        return false;
    }

}