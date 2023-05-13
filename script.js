function validation()
{
    var arr=[];
    var x;
    x = nameCheck();
    arr[0]=x;
    x=mailCheck();
    arr[1]=x;
    x=phoneCheck();
    arr[2]=x;
    x=passwordCheck();
    arr[3]=x;
    x=cpassCheck();
    arr[4]=x;
    for(var i=0;i<5;i++)
    {
        if(arr[i]===false)
        {
            return false;
        }
    }
    alert("FORM SUBMITTED SUCCESSFULLY!!")
    return true;
}
function nameCheck()
{
    const fname=document.getElementById("name").value;
    if(fname.length<5)
    {
        alert("Names With Characters Less Than 5 Not Acceptable!");
        return false;
    }
    return true;
}
function mailCheck()
{
    const email=document.getElementById("email").value;
    if(email.includes('@')==false)
    {
        alert("Invalid Email Address Detected!!");
        return false;
    }
    return true;
}
function phoneCheck()
{
    const phone=document.getElementById("phone").value;
    if(phone.length<10 || phone=='123456789')
    {
        alert("Invalid Phone Number Detected!!");
        return false;
    }
    return true;
}
function passwordCheck()
{
    const pass=document.getElementById("password").value;
    const fname=document.getElementById("name").value;
    if(pass=='password' || pass==fname || pass.length<8)
    {
        alert("Please Enter a Strong Password!!");
        return false;
    }
    return true;
}
function cpassCheck()
{
    const confirm=document.getElementById("confirm").value;
    const pass=document.getElementById("password").value;
    if(confirm!=pass)
    {
        alert("Passwords Do Not Match!!");
        return false;
    }
    return true;
}


