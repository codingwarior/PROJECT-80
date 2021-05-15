var nameOfGuest = []

function submit()
{
    var names = document.getElementById("inputName").value;
    nameOfGuest.push(names);
    document.getElementById("arrayDisplayComma").innerHTML = nameOfGuest;
}
function show()
{
    var remove_commas = nameOfGuest.join(" <br>");
    document.getElementById("showArrayNoComma").innerHTML = remove_commas;
}
function sortArray()
{
    var sortArrayhold = nameOfGuest.sort().join(" <br>");
    document.getElementById("sortedArray").innerHTML = sortArrayhold;
}
function searching()
{
    var s= document.getElementById("arrayDisplayComma").value;
    var found=0;
    var j;
    for (j=0; j<nameOfGuest.length; j++)
    {
        if(s==nameOfGuest[j]){
            found=found+1;
        }
    }
    document.getElementById("searchPara").innerHTML="Name Found "+found+ " time/s";
    console.log("found name "+found+ " time/s");
}