import { MultipleUser, CardTemplate } from "./MultipleUsers"
import { validateSession } from "../Common Method/validate";
import { LoadHistory } from "../Common Method/LoadData";

class RegisterElement
{
    Register()
    {
        document.querySelectorAll(".records").forEach(item =>
            {
                item.addEventListener("click" ,event =>
                {
                    LoadHistory.ClearHistory();
                    let userId = (event.target as HTMLButtonElement).id;
                    new CardTemplate().GetUserName(userId);
                    let data = (document.getElementById(userId) as HTMLButtonElement).previousElementSibling.innerHTML;
                    LoadHistory.MapHistory(data);
                })
            });
    }
}
(async ()=>
{   
    if(validateSession.checkValidSession())
    {
    let user = new MultipleUser() 
    let getUsers = await user.FetchData();
    let template = new CardTemplate();
    template.GenerateCard(getUsers);
    new RegisterElement().Register();
    }
    else
    {
        localStorage.removeItem("user");
        window.location.href="login.html";
    }
    return "";
})();

(document.getElementById("profile") as HTMLButtonElement).addEventListener("click" , event=>
{
    window.location.href="UserProfile.html";
});

(document.getElementById("calculator") as HTMLButtonElement).addEventListener("click" , event=>
{
    window.location.href="calculator.html";
});

(document.getElementById("logout") as HTMLButtonElement).addEventListener("click" , event=>
{
    localStorage.removeItem("user");
    window.location.href="login.html";
});



// document.addEventListener("click" , event=>
// {
//     let targetClass = (event.target as HTMLButtonElement).className;
//     if(targetClass == "records")
//     {
//     LoadHistory.ClearHistory();
//         let userId = (event.target as HTMLButtonElement).id;
//         let data = (document.getElementById(userId) as HTMLButtonElement).previousElementSibling.innerHTML;
//         LoadHistory.MapHistory(data);
//     }
// })



