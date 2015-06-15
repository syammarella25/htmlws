function showAlert() {
    var textValue = document.getElementById("text").value;
    alert("hello " + textValue);
    window.location.href="frameSetDemo.html";
}

function showFileAlert() {
    var textValue = document.getElementById("fileDownload");
    console.log(textValue);
    document.getElementById("text").value=textValue.value;

}

