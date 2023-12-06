const fs=require('fs');

module.exports=class loginmodel
{
    constructor(n)
    {
        this.message=n;
    }
 


save()
{
    fs.writeFile('username.txt',`${this.message}  `,{flag:'a'},(err,data)=>console.log(`${this.message}`));
}

fetch()
{
    fs.readFile('username.txt',(err,data)=>{
            
        if(err)
        {
          console.log(err);
          data="no chat exist";
        }
        return 'username.txt';
});

}
}