
import { FetchRequest } from "../Common Method/HttpRequest";
import { Validate } from "./UsersCredentials";



(document.getElementById("login")as HTMLButtonElement).addEventListener("click" , async event =>
{
    var username = (document.getElementById("username") as HTMLInputElement).value;
    var password = (document.getElementById("password") as HTMLInputElement).value;
    if(username.trim() =="" || password.trim()=="")
    {
         (document.getElementById("failmessage") as HTMLHeadingElement).innerText = " ! please Enter valid Credentials";
    }
    else if(await Validate.login(username , password))
    {
       window.location.href = "UserProfile.html";
    }
    else{
        (document.getElementById("failmessage") as HTMLHeadingElement).innerText = " ! please Enter valid Credentials";
        setTimeout( ()=>
        (document.getElementById("failmessage") as HTMLHeadingElement).innerText = ""
        ,3000);
        
    }
    return "";
});

(document.getElementById("signup")as HTMLButtonElement).addEventListener("click" , event =>
{
    window.location.href = "signup.html";
});