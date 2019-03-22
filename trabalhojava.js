function validar(){
    var obj = document.querySelector("#senha");
    if(obj.value > 0)
        obj.style.backgroundColor = "green";
    else 
        obj.style.backgroundColor = "red";
}

function retirar(){
    var lis = document.querySelectorAll("li")
    for(var i=0 ; i < lis.length; i++){
        var obj = document.querySelector("#senha");
        if(obj.value > 0){
        lis[i].style.display = "none";
    }}
}