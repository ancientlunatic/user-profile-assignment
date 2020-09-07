
import { FormValidatation } from "../Common Method/validate";
import { SignUp } from "./UserData";

(document.getElementById("submit") as HTMLButtonElement).addEventListener("click" , async event=>
{
    var validate = new FormValidatation();
    var data = SignUp.GetData();
    let validateData = !validate.validate(data);
    let validateImage = !validate.validateImageFile(data);
    if(validateData && validateImage)
    {
        if(await SignUp.upload())
        {
            (document.getElementById("prompt") as HTMLDivElement).style.display= "block";
        }
    }
    return "";    
});

(document.getElementById("exit") as HTMLButtonElement).addEventListener("click" , event =>
{
    (document.getElementById("prompt") as HTMLDivElement).style.display= "none";
});


(document.getElementById("sucessSignUp") as HTMLButtonElement)?.addEventListener("click" , event =>
{
    window.location.href = "login.html";
});

(document.getElementById("login")as HTMLButtonElement).addEventListener("click" ,  event =>
{
    window.location.href = "login.html";
});