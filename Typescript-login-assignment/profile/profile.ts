import { User } from "../Models/Usermodel";
import { FormValidatation, validateSession } from "../Common Method/validate";
import { FetchRequest } from "../Common Method/HttpRequest";
import { SignUp } from "../signup/UserData";
import { profile , UpdateUser } from "./UserProfile";
import { StorageData } from "../Common Method/LocalStorage";


(async ()=>
{
    if(validateSession.checkValidSession())
    {
        var result = await profile.GetUserData();    
        if((result))
        {
            profile.MapData(result);
            (document.getElementById("content") as HTMLDivElement).style.display="block";
        }
        else
        {
            localStorage.removeItem("user");
            window.location.href="login.html";
        }
    }
    else
    {
        localStorage.removeItem("user");
        window.location.href="login.html";
    }

return "";
})();

(document.getElementById("logout") as HTMLButtonElement).addEventListener("click" , event=>
{
    localStorage.removeItem("user");
    window.location.href="login.html";
});
(document.getElementById("calculator") as HTMLButtonElement).addEventListener("click" , event=>
{
    
    window.location.href="calculator.html";
});

(document.getElementById("update") as HTMLButtonElement).addEventListener("click" , async event=>
{
    console.log("log");
    (document.getElementById("updateform") as HTMLDivElement).style.display= "block";
    
    var user = await profile.GetUserData();
       
    var mapUser = new User();
    mapUser.MapData(user);
    UpdateUser.BindData(mapUser);
    return "";
});


(document.getElementById("submit") as HTMLButtonElement).addEventListener("click" , async event=>
{
    var validate = new FormValidatation();
    var data = SignUp.GetData();
    let validateData = !validate.validate(data);
    let validateImage = !validate.validateImageSize(data);
    if(validateData && validateImage )
    {
        var result = await UpdateUser.upload();
        if(result)
        {
            (document.getElementById("prompt") as HTMLDivElement).style.display= "block";
        }
    }
    return "";  
});


(document.getElementById("updateclose") as HTMLButtonElement).addEventListener("click" , event =>
{
    (document.getElementById("updateform") as HTMLDivElement).style.display= "none";
});
(document.getElementById("sucessSignUp") as HTMLButtonElement)?.addEventListener("click" , async event =>
{
    (document.getElementById("updateform") as HTMLDivElement).style.display= "none";
    (document.getElementById("prompt") as HTMLDivElement).style.display= "none";
    var result = await profile.GetUserData();
    
        if((result)!=null)
        {
            profile.MapData(result);
        }
        return null;
});


(document.getElementById("AllUser") as HTMLButtonElement).addEventListener("click" , event=>
{
    window.location.href="AllUsers.html";
});

