import { Person, User } from "../Models/Usermodel";
import { FetchRequest } from "../Common Method/HttpRequest";
import { Constants } from "../Common Method/Constants";

export class CardTemplate
{

    GenerateCard(user:Array<Person>)
    {
        user.forEach(element => {
            this.CreateCard(element);
        });
    }
    CreateCard(element : Person)
    {
       let div =  document.createElement("div");
       div.setAttribute("class" , "card");
       (document.getElementById("container") as HTMLDivElement).appendChild(div);
       let img  = document.createElement("img");
       img.setAttribute("src", Constants.BaseURl+"/" + element.imagePath );
       img.setAttribute("alt", "USer");
       img.style.width="100%";
       div.appendChild(img);
       let childDiv = document.createElement("div");
       childDiv.setAttribute("class" , "container");
       div.appendChild(childDiv);
       let heading = document.createElement("h4");
       let bold = document.createElement("b");
       bold.innerText = element.FirstName + " " + element.LastName;
       heading.appendChild(bold);
       childDiv.appendChild(heading);
       let paragraph = document.createElement("p");
       paragraph.innerText = element.UserName;
       let button = document.createElement("button");
       button.setAttribute("id" , "user"+element.UserId);
       button.setAttribute("class" , "records");
       button.innerText="Show History";
       childDiv.appendChild(paragraph);
       childDiv.appendChild(button);
    }

    GetUserName(userId:string)
    {
        try{
        var userName = document.getElementById(userId).parentElement.firstChild.firstChild.firstChild.data;
        (document.getElementById("userhistory") as HTMLHeadingElement).innerText = userName +" history"
        }
       catch{}
    }

}

export class MultipleUser
{
    async FetchData()
    {
        const url = Constants.BaseURl +"/api/admin/all";
        let result = await FetchRequest.Getrequest(url);
        if(result.statusCode!=200)
        {
            return  null;
        }
        let users = result.result;
        let persons : Array<Person> = new Array<Person>();
        users.forEach(element => {
            let user = new Person();
            user.MapData(element)
            persons.push(user);
        });
        return persons;
    }
}