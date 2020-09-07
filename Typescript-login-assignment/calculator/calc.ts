import { StorageData } from "../Common Method/LocalStorage";
import { LoadHistory } from "../Common Method/LoadData";
import { validateSession } from "../Common Method/validate";


(()=>
{
   
    if(validateSession.checkValidSession())
    {
        let item = StorageData.GetParseValue("user");
        LoadHistory.MapHistory(item.username);
        (document.getElementById("greet") as HTMLHeadingElement).innerText = "Welcome " + item.name;
        (document.getElementById("calc") as HTMLDivElement).style.display="block";
    }
    else
    {
        localStorage.removeItem("user");
        window.location.href="login.html";

    }
})();

class Calcullator
{
    static calcRegex = new RegExp("^[0-9+-/*=.]{1,}$");
    public static clr() :void
    {
        (document.getElementById("result") as HTMLInputElement).value = "";
    }
    public static append(num :string) : void
    {
        (document.getElementById("result") as HTMLInputElement).value += num;
    }
    public static  solve() :void
    {
        
        let querry = (document.getElementById("result") as HTMLInputElement).value;
        try{   
            if(!this.calcRegex.test(querry))
            {
                throw "";
            }
            let result = eval(querry);
            let output = querry + " = " + result;
            (document.getElementById("result") as HTMLInputElement).value = result;     
            this.SaveData(output);
            this.GenerateHistory(output);
        }
        catch{
            
            (document.getElementById("errormessage") as  HTMLParagraphElement).innerText ="please  enter the valid expression ";
            setTimeout(()=>
            {
                (document.getElementById("errormessage") as  HTMLParagraphElement).innerText="";
            }, 3000);
        }
    }
    public static SaveData(output : string)
    {
        let user = StorageData.GetParseValue("user");
        if(user)
        {
            let username =  user.username;
            let history = StorageData.GetParseValue(username);
            if(history)
            {
                history.push(output);
                StorageData.SetData( username , JSON.stringify(history));
            }
            else
            {
                let data = new Array<string>();
                data.push(output);
                StorageData.SetData( username , JSON.stringify(data));
            }
            
        }
    }
    static GenerateHistory(history : string)
        {
            let list = document.createElement("li");
                 list.innerText = history;
                (document.getElementById("record") as HTMLUListElement).appendChild(list);
        
        }
}




(document.getElementById("logout") as HTMLButtonElement).addEventListener("click", function (event) {
    
    localStorage.removeItem("user");
    window.location.href = "login.html";
});
(document.getElementById("profilePage") as HTMLButtonElement).addEventListener("click", function (event) {
    
    window.location.href = "UserProfile.html";
});
(document.getElementById("clr") as HTMLButtonElement).addEventListener("click", function (event) {
 
    Calcullator.clr();
});

(document.getElementById("solve") as HTMLButtonElement).addEventListener("click", function (event) {
 
    Calcullator.solve();
});

(document).addEventListener("click" , event=>
{
    let clsname:string = (<HTMLButtonElement>event.target)?.className;
    if(clsname== "vb")
    {
    let val = (<HTMLButtonElement>event.target)?.value;
    Calcullator.append(val);
    }

});
(document).addEventListener("keypress" , event=>
{
   
    if(event.keyCode==13)
    {
        Calcullator.solve();
    }
});


