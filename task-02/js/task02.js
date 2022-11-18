let imagenGrande = document.getElementById("imagenGrande");
let contenedorMiniaturas = document.getElementById("contenedorMiniaturas");

for(let i =1; i<=2; i++ ){
    let nuevaImagen = document.createElement("img");
    nuevaImagen.setAttribute("src", "img/foto"+i+".png");
    contenedorMiniaturas.appendChild(nuevaImagen);

    nuevaImagen.addEventListener("click", function(e){
        let mySrc = e.target.getAttribute("src");
        cambiarImagen(mySrc);
    })
}

function cambiarImagen(mySrc){
    imagenGrande.setAttribute("src", mySrc);
}