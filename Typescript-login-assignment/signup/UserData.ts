import { FetchRequest } from "../Common Method/HttpRequest";
import { User } from "../Models/Usermodel";

export class SignUp
{
    public static GetData() : User
    {
        let user = new User();
        user.FirstName = (document.getElementById("Fname") as HTMLInputElement).value;
        user.LastName = (document.getElementById("Lname") as HTMLInputElement).value;
        user.ProfileImage = (document.getElementById("profile") as HTMLMediaElement).files[0];
        user.PhoneNumber = (document.getElementById("phone") as HTMLInputElement).value;
        user.UserName = (document.getElementById("Username") as HTMLInputElement).value;
        user.password = (document.getElementById("password") as HTMLInputElement).value;
        return user;
    }

    public static Getfields() : FormData
    {
        let data = this.GetData();
        let form : FormData;
        form  = new FormData();
        form.append("ProfileImage" , data.ProfileImage);
        form.append("FirstName" , data.FirstName);
        form.append("LastName" , data.LastName);
        form.append("PhoneNumber" , data.PhoneNumber);
        form.append("UserName" , data.UserName);
        form.append("password" , data.password);
        return form;
    }


    public  static async upload()
    {
        let  url="https://localhost:44324/api/OAuth/signup";
        let data = this.Getfields();
        let response = await  FetchRequest.PostFormRequest(url , data);
        if(response!=null)
        {
            return true;
        }
        return false;
    }
}
