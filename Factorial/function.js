function fact()
{
    var num=document.getElementById("num").value;
    var i,sum=1;
    for(i=1;i<=num;i++)
    {
        sum=sum*i;
    }
    alert("Factorial is:"+sum);
}