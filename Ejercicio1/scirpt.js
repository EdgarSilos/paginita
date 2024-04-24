document.getElementById("si").addEventListener("submit",function(event){
    event.preventDefault();

    var t1=document.getElementById("usuario").value;
    if(t1==="EdgarSilos"){
        document.getElementById("e1").textContent="";
    }
    else{
        document.getElementById("e1").textContent="usuario incorrecto";
    }
    
    var t2=document.getElementById("contra").value;
    if(t2==="1234"){
        document.getElementById("e2").textContent="";
    }
    else{
        document.getElementById("e2").textContent="contraseña incorrecta";
    }
    if(t1==="EdgarSilos"&&t2==="1234"){
        alert("Has Iniciado Seción Correctamente");
    }
    else{
        alert("el usuario o la contraseña son incorrectoas")
    }
});
document.getElementById("si").addEventListener("reset",function(event){
    document.getElementById("e1").textContent="";
    document.getElementById("e2").textContent="";
});
