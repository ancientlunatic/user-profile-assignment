export class StorageData
{

    static GetParseValue(key : string)
    {
        const data =  localStorage.getItem(key);
        if(data)
        {
            return JSON.parse(data);
        }
        return null;    
    }
    static  GetValue(key : string)
    {
        return  localStorage.getItem(key);
    }
    static SetData(key:  string , data : string)
    {
        localStorage.setItem(key , data);
    }
}