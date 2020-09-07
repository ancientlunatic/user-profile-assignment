import { StorageData } from "./LocalStorage";

export class LoadHistory
{
    static MapHistory(key:string)
    {
        let history = StorageData.GetParseValue(key);
        if(history)
        {
               history.forEach(element => {
                 let list = document.createElement("li");
                 list.innerText = element;
                (document.getElementById("record") as HTMLUListElement).appendChild(list);
               });
            
        }
    }
    static ClearHistory()
    {

       let parent =  (document.getElementById("record") as HTMLUListElement);
       while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    }
}