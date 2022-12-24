var usernames=["admin","author","guset"];
var password = ["321","abc","xyz"];
function login()
{

    var username = document.getElementById("txt1").value;
    var password = document.getElementById("txt2").value;
    var sms="";
    for(var i = 0; i < username.length; i++)
    {
        if(username == username[i])
        {
            sms="";
            //compare password for the correct username
            if(password == password[i])
            {
                // redirect user to google.com
                location.href="http://ww.google.com";
            }
            else{
                sms="Invalid password!";
            }
            break; // exit the loop
        }
        else{
            sms="Invalid username!";
        }
    }
    document.getElementById("sms").innerHTML = sms;
}
function cancel()
{
    Document.getElementById("txt1").value="";
    Document.getElementById("txt2").value="";
    Document.getElementById("txt1").focus();

}