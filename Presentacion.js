var header = document.getElementById('Header');

window.addEventListener('scroll', ()=>{

    var scroll = window.scrollY

    if(scroll>10){
        header.style.backgroundColor='#121212'
    }else{
        header.style.backgroundColor='black'
    }

})

function toggleDetails(projectNumber) {
    var detailsElement = document.getElementById("det" + projectNumber);
    if (detailsElement.style.display === "block") {
        detailsElement.style.display = "none";
    } else {
        detailsElement.style.display = "block";
    }
}
function cerrarToggleDetails(projectNumber) {
    var detailsElement = document.getElementById("det" + projectNumber);
    detailsElement.style.display="none"

}

function cerrar(){
    document.getElementById("det").style.display="none"
}