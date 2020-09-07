import { User } from "../Models/Usermodel";
import { StorageData } from "./LocalStorage";


export class validateSession
{
    static checkValidSession() :boolean
    {
        let item = StorageData.GetParseValue("user");
        if(item)
        {
            if(item.exp > new Date().getTime())
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}

export class FormValidatation
{
        public imageSize = 1*1024*1024;
        public data : User;
        public nameRegex = new RegExp("^[a-zA-Z]{3,20}$");
        public emailRegex = new RegExp("^[a-zA-Z0-9._]{3,}@[a-z0-9]{2,}(.com|.co.in)$");
        public phoneNumberRegex = new RegExp("^[6-9]{1}[0-9]{9}$")
        public passwordRegex = new RegExp("^[a-zA-Z0-9@#$%^&*]{3,25}$")
        public validate(data:User) :boolean
        {
        let result :boolean = false;
        if(!this.nameRegex.test(data.FirstName))
        {
            (document.getElementById("FnameErr") as HTMLSpanElement).innerText = "Plese enter the Correct First Name";
            result = true;
        }
        else
        {
            (document.getElementById("FnameErr") as HTMLSpanElement).innerText = "";
        }
        if(!this.nameRegex.test(data.LastName))
        {
            (document.getElementById("LnameErr") as HTMLSpanElement).innerText = "Plese enter the Correct First Name"
            result = true;
        }
        else
        {
            (document.getElementById("LnameErr") as HTMLSpanElement).innerText = "";
        }
       
        if(!this.emailRegex.test(data.UserName))
        {
            (document.getElementById("UnameErr") as HTMLSpanElement).innerText = "Please enter valid username format ex. abc@xyz.com /co.in use special char '._'";
            result = true;
        }
        else
        {
            (document.getElementById("UnameErr") as HTMLSpanElement).innerText = "";
        }
        if(!this.passwordRegex.test(data.password))
        {
            (document.getElementById("passwordErr") as HTMLSpanElement).innerText = "password must be 3 or more digit ";
            result = true;
        }
        else
        {
            (document.getElementById("passwordErr") as HTMLSpanElement).innerText = "";
        }
        if(!this.phoneNumberRegex.test(data.PhoneNumber))
        {
            (document.getElementById("PnumberErr") as HTMLSpanElement).innerText ="Enter a valid phone number";
            result = true;
        }
        else
        {
            (document.getElementById("PnumberErr") as HTMLSpanElement).innerText = "";
        }
        return result;
    }

    public validateImageFile(data:User) : boolean
    {   
        let result : boolean = false;
        if(!data.ProfileImage)
        {
            (document.getElementById("ProfileErr") as HTMLSpanElement).innerText = "please select one picture";
            result = true;
        }
        else if(data.ProfileImage.size>this.imageSize)
        {
            (document.getElementById("ProfileErr") as HTMLSpanElement).innerText = "Image size is larger then expected.. Must be less then " + (this.imageSize/1024/1024).toFixed(3) + " mb"  ;
            result = true;
        }
        else
        {
            (document.getElementById("ProfileErr") as HTMLSpanElement).innerText = "";
        }
        return result;
    }
    public validateImageSize(data:User) : boolean
    {   
        let result : boolean = false
        
        if(data.ProfileImage && data.ProfileImage.size>this.imageSize)
        {
            (document.getElementById("ProfileErr") as HTMLSpanElement).innerText = "Image size is larger then expected.. Must be less then " + (this.imageSize/1024/1024).toFixed(3) + " mb"  ;
            result = true;
        }
        else
        {
            (document.getElementById("ProfileErr") as HTMLSpanElement).innerText = "";
        }
        return result;
    }
}