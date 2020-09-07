export class User
{
    public FirstName :string ;
    public LastName :string ;
    public UserName :string ;
    public PhoneNumber : string ;
    public password : string ;
    public ProfileImage : Blob ;

    public MapData(result:any){
        
                this.FirstName = result.firstName;
                this.LastName = result.lastName;
                this.password = result.password;
                this.PhoneNumber = result.phoneNumber;
                this.UserName =result.userName;
            }
   
}

export class Person
{
    public UserId : number
    public FirstName :string ;
    public LastName :string ;
    public UserName :string ;
    public PhoneNumber : string ;
    public imagePath : string ;

    public MapData(result:any){
        this.UserId = result.id;
        this.FirstName = result.firstName;
        this.LastName = result.lastName;
        this.PhoneNumber = result.phoneNumber;
        this.UserName =result.userName;
        this.imagePath = result.profileImagePath;
    }
}
