function onStateChange(){
    var state = document.getElementById("state");
    var stateValue = state.value;
    console.log(stateValue);
    var cityValuesList = "";
    if (stateValue == "AP") {
        cityValuesList = ["Vijayawada", "Visakapatnam", "Kurnool", "Tirupathi"];
    } else if (stateValue == "TG") {
        cityValuesList = ["Hyderabad","Warangal", "Nizamabad", "Khammam"];
    } else if (stateValue == "KA") {
        cityValuesList = ["Bangalore", "Hubli", "Mangalore","Mysore"];
    } else if (stateValue == "TN") {
        cityValuesList = ["Chennai", "Madurai", "Coimbatore","Tiruchi"];
    } else if (stateValue == "KR") {
        cityValuesList = ["Cochin", "Trivandrum", "Alapi"];
    }

    //Create and append select list
    /*var selectList = document.createElement("select");
    selectList.setAttribute("id", "mySelect");
    myDiv.appendChild(selectList);*/

    var selectList = document.getElementById("city");
    var i;
    for(i=selectList.options.length-1;i>=0;i--)
    {
        selectList.remove(i);
    }


    //Create and append the options
    for (var i = 0; i < cityValuesList.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", cityValuesList[i]);
        option.text = cityValuesList[i];
        selectList.appendChild(option);
    }
}
