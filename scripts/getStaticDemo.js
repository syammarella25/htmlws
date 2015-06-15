function getSampleData()
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        } else {
            document.getElementById("myDiv").innerHTML="<h1>Failed to connect to the server</h1>";
        }
    }
    xmlhttp.open("GET","../resources/data/sampleData.txt",true);
    xmlhttp.send();
}

function postDemo()
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        } else {
            document.getElementById("myDiv").innerHTML="<h1>Failed to connect to the server</h1>";
        }
    }
    xmlhttp.open("POST","../resources/data/sampleData.txt",true);
    xmlhttp.send();
}

function getServerData(id)
{
    var data = document.getElementById(id).value;
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {

        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            alert("succesfully executed the ajax calls");
            document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        } else {

            document.getElementById("myDiv").innerHTML="<h1>Failed to connect to the server</h1>";
        }
    }
    xmlhttp.open("GET","http://localhost:9090/SystemInfo/rest/hello/get/"+data,true);
    alert("Sending the ajax call");
    xmlhttp.send();
    alert("executed the ajax call");
}

function postToServer()
{
    var data = document.getElementById("data").value;

    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("POST","http://localhost:9090/SystemInfo/rest/hello/post",true);
    xmlhttp.send(data);

}

function loadTable()
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {


        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {

            var resultJSON = JSON.parse(xmlhttp.responseText);
            var html = '';
            for(var i = 0; i < resultJSON.person.length; i++) {
                html += '<tr><td>' + resultJSON.person[i].firstName + '</td><td>'+
                resultJSON.person[i].lastName + '</td><td>'
                + resultJSON.person[i].age + '</td></tr>';
            }

            document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
            document.getElementById("personTable").innerHTML+=html;
        }
    }
    xmlhttp.open("GET","../resources/data/personData",true);
    xmlhttp.send();

}
