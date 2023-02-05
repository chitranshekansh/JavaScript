function leap()
{
    var year=document.getElementById("num").value;
    if(year%4==0 && (year%400 || year%100!=0))
    {
        alert("Year is a leap year");
    }
    else
    {
        alert("Year is not a leap year");
    }

}