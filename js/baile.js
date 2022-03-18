var estadoBaile = "quieto";
var jesus = document.getElementById("jesus");

function controlarBaile(){
    if(estadoBaile == "quieto"){
        estadoBaile = "bailando";
        jesus.classList.add("active");
        console.log("bailo");
    }else{
        estadoBaile="quieto";
        jesus.classList.remove("active");
        console.log("quieto");

    }
}